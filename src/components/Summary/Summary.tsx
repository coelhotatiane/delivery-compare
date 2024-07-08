import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Button, Card, CardActions, CardContent, Grid, Paper, Typography } from '@mui/material';

function Summary(
  { summary } : { summary: any },
  ) {
    return (
      <Card>
        <CardContent>
        <Typography variant="h6">Summary</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar src="https://static.ifood.com.br/webapp/images/logo-smile-512x512.png" />
          </ListItemAvatar>
          <ListItemText primary="Ifood" secondary={summary} />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBMXiapJO3bOHBmBO-BV8tc0VMYeuuMo7isab6h8lOiA&s" />
          </ListItemAvatar>
          <ListItemText primary="Rappi" secondary={summary} />
        </ListItem>
      </List>
    </CardContent>
    </Card>
    );
}

export default Summary;
