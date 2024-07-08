import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

interface IIfoodShoppingList {
  description: string,
  unitPrice: number,
  weight: {
      value: number,
      unit: string,
      unitWeight: number
  }
}

export default function ResultsTable(
  { shoppingList, comparisonList } : { shoppingList: IIfoodShoppingList[], comparisonList: any[] },
  ) {
  return (
    <div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Original</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">BestMatch</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {comparisonList.map((row) => (
            <TableRow
              key={row.product}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.product}
              </TableCell>
              <TableCell align="right">{row.originalPrice}</TableCell>
              <TableCell align="right">{row.bestMatch}</TableCell>
              <TableCell align="right">{row.bestMatchPrice}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
