import { Grid, Typography } from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import axios, { AxiosRequestConfig } from "axios";

export async function useAxios(query: string) {

    const config: AxiosRequestConfig = {
        headers: {
            query: query,
        }
    }
    const response = await axios.get('localhost:3000', config)
    return response.data
}


function TwitterBar() {
    const data = useAxios('gamestop')
    console.log(data)
    return (
        <Grid
            container
            spacing={1}
            direction="column"
            justify="flex-start"
            alignItems="center"
        >
            <Grid item xs={12}>
                <Grid
                    container
                    spacing={1}
                >
                    <Grid item>
                        <TwitterIcon color={'secondary'} fontSize={"large"} />
                    </Grid>
                    <Grid item>
                        <Typography
                            variant={"h4"}
                            color={"secondary"}>
                            Twitter Sentiment
            </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={12}>
                <TwitterSummaryCard ticker={"$TSLA"} average={76} />
            </Grid>
            <Grid item xs={12}>
                <TweetCard tweet={"\"Pulled the trigger tonight for my $TSLA Model Y on reserve. My first new car in 6 years. I'm happy.\""}
                    author={"@HeartDocTesla"}
                    score={99} />
            </Grid>
            <Grid item xs={12}>
                <TweetCard tweet={"\"Hopefully everyone took this advise the last couple of weeks when stocks were down. So much opportunity in the near future $GME $AMC $BTC $TSLA\""}
                    author={"@DayTraderJay2"}
                    score={52} />
            </Grid>
            <Grid item xs={12}>
                <TweetCard tweet={"\"$TSLA Looks like support held, premarket gap up. Watch for potential sell off at market opening.\""}
                    author={"@TextsubX"}
                    score={79} />
            </Grid>
        </Grid>
    );
}

const useStyles = makeStyles({
    root: {
        width: 300,
    }
});

const PositiveColorTypography = withStyles({
    root: {
        color: "#00D753"
    }
})(Typography);

export function TweetCard(props: { tweet: string; author: string; score: number; }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <a href={"https://twitter.com/HeartDocTesla/status/1369871593057435650"} target="_blank" style={{ textDecoration: 'none' }}>
                    <Grid
                        container
                        spacing={3}
                        direction="row"
                        wrap="nowrap"
                        alignItems="center"
                    >
                        <Grid item>
                            <CardContent >
                                <Typography variant="body1" color="textPrimary" component="p">
                                    {props.tweet}
                                </Typography>
                                <Typography variant="subtitle2" align="right" color="textSecondary" component="p">
                                    {props.author}
                                </Typography>
                            </CardContent>
                        </Grid>
                        <Grid item>
                            <CardContent>
                                <PositiveColorTypography variant="h5" color="primary">
                                    {props.score}
                                </PositiveColorTypography>
                            </CardContent>
                        </Grid>
                    </Grid>
                </a>
            </CardActionArea>
        </Card>
    );
}

export function TwitterSummaryCard(props: { ticker: string; average: number; }) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <Grid
                    container
                    spacing={2}
                    direction="column"
                    justify="flex-start"
                    alignItems="center"
                >
                    <Grid item>
                        <CardContent>
                            <Typography variant="h4" color="textPrimary" component="h4">
                                {props.ticker}
                            </Typography>
                            <PositiveColorTypography variant="h4" align="center" color="primary">
                                {props.average}
                            </PositiveColorTypography>
                            <Typography variant="body1" color="textSecondary" component="p">
                                {"WEEKLY SCORE"}
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
    );
}
export default TwitterBar;
