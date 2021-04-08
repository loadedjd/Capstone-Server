/* eslint-disable no-use-before-define */
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import {Grid} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import {AppContext} from './state';
import React from 'react';
import { Fade } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    searchbar: {
        backgroundColor: theme.palette.background.default,
    },
}));

export default function SearchBar() {
    const classes = useStyles();
    const appState = React.useContext(AppContext);
    const [term, setTerm] = React.useState<string>('');
    return (
        <Fade in={true} timeout={1500}>
        <div className={classes.searchbar}>
            <Grid
                container
                spacing={1}
                direction={'row'}
                justify={'center'}
                alignItems={'center'}
            >

                <Grid item>
                    <TextField
                        label="Search a stock!"
                        margin="normal"
                        variant="outlined"
                        onChange={(event) => {
                            console.log(event.target.value);
                            setTerm(event.target.value);
                        }}
                        value={term}
                    />
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="primary"
                        size={"large"}
                        onClick={() => {
                            appState?.setTicker(term);
                            appState?.setDisplay(true);
                        }}
                    >
                        Search
                    </Button>
                </Grid>
            </Grid>
        </div>
        </Fade>
    );
}

// const top10Stocks = [
//   { title: 'Apple', ticker: 'AAPL' },
//   { title: 'Facebook', ticker: 'FB' },
//   { title: 'Microsoft', ticker: 'MSFT' },
//   { title: 'Gamestop', ticker: 'GME' },
//   { title: 'IBM', ticker: 'IBM' },
//   { title: 'Tesla', ticker: 'TSLA' },
//   { title: 'Disney', ticker: 'DIS' },
//   { title: 'AMC', ticker: 'AMC' },
//   { title: 'Google', ticker: 'GOOGL' },
//   { title: 'Netflix', ticker: 'NFLX' },
// ];