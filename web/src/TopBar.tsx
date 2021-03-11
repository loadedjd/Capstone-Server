
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { Button, MenuItem } from "@material-ui/core";
import ShowChartIcon from '@material-ui/icons/ShowChart';
const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  appBar: {
    width: `calc(100%)`,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function TopBar() {
    const classes = useStyles();
    return(
      <AppBar position='fixed' className={classes.appBar} color={"primary"}>
          <Toolbar>
            <MenuItem>
                  <Typography variant={'h4'} className={classes.title}>
                      WatsonWatch
                  </Typography>
              </MenuItem>
              <IconButton
                  edge='start'
                  className={classes.menuButton}
                  color='inherit'
                  aria-label='menu'
                  >
                  <ShowChartIcon />
              </IconButton>
              <MenuItem>
                  <Typography variant={'h6'} className={classes.title}>
                      Home
                  </Typography>
              </MenuItem>
              <MenuItem>
                  <Typography variant={'h6'} className={classes.title}>
                      My Stocks
                  </Typography>
              </MenuItem>
              <MenuItem>
                <Typography variant={'h6'} className={classes.title}>
                      About
                  </Typography>
                </MenuItem>
                <Button color="inherit">Login</Button>
                <Button color="inherit">Sign Up</Button>
          </Toolbar>
      </AppBar>
    )
}

    export default TopBar;

// const articles = (await axios.get('localhost:3000/api/news', 'gamestop')).data
// const news_element = <news stock='GameStop' articles='GameStop Stock Surging'/>;
