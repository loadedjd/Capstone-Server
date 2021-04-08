import {Grid} from '@material-ui/core';
import NewsBar from './NewsBar';
import TwitterBar from './twitter/TwitterBar';
import SearchBar from './SearchBar';
import {StockDisplay} from './Stock.Component/display';
import {AppContext} from './state';
import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Fade from '@material-ui/core/Fade';
import { Slide } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    search: {
        width: 'calc(100%)',
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(1),
    },
    outputInfo: {
        width: 'calc(100%)',
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(1),
    },
    fullWidth: {
        width: 'calc(100%)',
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(1),
    },
}));

export default function MainContent() {
    const classes = useStyles();
    const appState = React.useContext(AppContext);
    return (
        <main className={classes.fullWidth}>
            <div className={classes.toolbar}/>
            <div className={classes.search}>
                <Grid
                    container
                    spacing={1}
                    direction={'column'}
                    justify={'center'}
                    alignItems={'center'}
                >
                    <Grid item>
                        <SearchBar/>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.outputInfo}>
                <Fade in={appState?.display} timeout={1000}>
                    <Grid item>
                        <Grid
                            container
                            spacing={0}
                            direction={'row'}
                            justify={'space-evenly'}
                            alignItems={'flex-start'}
                        >
                            <Grid item>
                                <NewsBar/>
                            </Grid>
                            <Slide direction="up" in={appState?.display} timeout={500} mountOnEnter unmountOnExit>
                            <Grid item>
                                <StockDisplay/>
                            </Grid>
                            </Slide>
                            <Grid item>
                                <TwitterBar/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Fade>
            </div>

        </main>
    );
}