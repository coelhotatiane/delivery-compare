import { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import ResultsTable from '../ResultsTable/ResultsTable';
import Summary from '../Summary/Summary';
import UserInput from '../UserInput/UserInput';
import BestMatch from '../../services/BestMatch';
import RappiApiService from '../../services/RappiApi/RappiApiService';
import ComparisonHelper from '../../services/ComparisonHelper';
import { body } from '../../services/RappiApi/types';
import { IIfoodShoppingList, IIfoodProduct } from '../../services/IfoodApi/types';
import { formatIfoodData } from './utils';


function Homepage() {
  const [shoppingList, setShoppingList] = useState<IIfoodShoppingList[]>([]);
  const [comparisonList, setComparisonList] = useState<any[]>([]);
  const [summary, setSummary] = useState<any>('');

  useEffect(() => {
    async function fetchData() {
      const productsInfo: IIfoodProduct[] = formatIfoodData(shoppingList);
      const comparisonList: any[] = [];
      let shippingCost;
      for(const product of productsInfo) {
        const body: body = {
          lat: -23.4118,
          lng: -46.4392,
          query: product.name,
          options: {}
        };
        const response = await RappiApiService.getData(body);
        const bestMatchService = new BestMatch(response, product);
        const bestMatchResponse = bestMatchService.getBestMatch();
        shippingCost = bestMatchResponse.shippingCost;
        const comparisonData = ComparisonHelper.getComparisonView(product, bestMatchResponse.bestMatch);
        comparisonList.push(comparisonData);
      }
      setComparisonList(comparisonList);
      setSummary(shippingCost);
    }
    fetchData();
  }, [shoppingList]);

  return (
    <Box m={2}>
      <Grid container direction='column' spacing={2}>
        <Grid item>
          <Typography variant="h2">Delivery compare</Typography>
          <Typography variant="subtitle1" gutterBottom>Compare delivery prices between the 2 major players in the market.</Typography>
        </Grid>
        <Grid item>
          <UserInput setShoppingList={setShoppingList} />
        </Grid>
        <Grid item>
          <Summary summary={summary}/>
        </Grid>
        <Grid item>
          <ResultsTable shoppingList={shoppingList} comparisonList={comparisonList}/>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Homepage;
