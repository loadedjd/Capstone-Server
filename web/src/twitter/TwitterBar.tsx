import { Grid, rgbToHex, Typography } from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import upArrow from "./uparrow.png";
import downArrow from "./downarrow.png";
import neutralArrow from "./neutralarrow.png";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import jsonTest from './tweets_output.json'

import axios, { AxiosRequestConfig } from "axios";

export async function useAxios(query: string) {

    const config: AxiosRequestConfig = {
        headers: {
            query: query,
        }
    }
    const response = await axios.get('localhost:3000/api/sentiment', config)
    return response
}

function MakeTwitterCard(i: number) {
    const data = jsonTest;
    return (
        <Grid item xs={12}>
            <TweetCard tweet={"\"" + data["data"][i]["text"] + "\""}
                author={"@" + data["data"][i]["author"]}
                score={data["data"][i]["score"]}
                url={"https://twitter.com/username/status/" + data["data"][i]["id"]} />
        </Grid>
    )
}

function TwitterBar() {
    // Instead of setting data to jsonTest, it should be the python output.
    const data = jsonTest;

    //const response = useAxios('tsla');
    //const data = response.data;

    console.log(data["data"][0]["author"])
    var positive_sum = 0;
    for (var i = 0; i < data["data"].length; i++) {
        if (data["data"][i]["score"] === "+") {
            positive_sum += 1;
        } else if (data["data"][i]["score"] === "~") {
            positive_sum += .5;
        }
    }
    var average = Math.round((positive_sum / data["data"].length) * 100);

    let TweetCards = []
    for (let i=0; i < data["data"].length; i++) {
        TweetCards.push(MakeTwitterCard(i));
    }


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
                <TwitterSummaryCard ticker={"$TSLA"} average={average} url={"https://twitter.com/search?q=" + data["ticker"]} />
            </Grid>
            {TweetCards}
        </Grid>
    );
}

const useStyles = makeStyles({
    root: {
        width: 300,
    },
    media: {
        width: 50,
        marginLeft: -10,
    },
});

const PositiveColorTypography = withStyles({
    root: {
        color: "#00D753"
    }
})(Typography);

const NeutralColorTypography = withStyles({
    root: {
        color: "#84C3D3"
    }
})(Typography);

const NegativeColorTypography = withStyles({
    root: {
        color: "#FF0827"
    }
})(Typography);

export function TweetCard(props: { tweet: string; author: string; score: string; url: string; }) {
    const classes = useStyles();

    var TextColor;
    if (props.score === "+") {
        TextColor = PositiveColorTypography;
    }
    else if (props.score === "~") {
        TextColor = NeutralColorTypography;
    }
    else {
        TextColor = NegativeColorTypography;
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <a href={props.url} target="_blank" style={{ textDecoration: 'none' }}>
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
                                <TextColor variant="h4">
                                    {props.score}
                                </TextColor>
                            </CardContent>
                        </Grid>
                    </Grid>
                </a>
            </CardActionArea>
        </Card>
    );
}

export function TwitterSummaryCard(props: { ticker: string; average: number; url: string }) {
    const classes = useStyles();

    var summaryImage;
    var TextColor;
    if (props.average > 60) {
        summaryImage = upArrow;
        TextColor = PositiveColorTypography;
    }
    else if (props.average > 40) {
        summaryImage = neutralArrow;
        TextColor = NeutralColorTypography;
    }
    else {
        summaryImage = downArrow;
        TextColor = NegativeColorTypography;
    }

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <a href={props.url} target="_blank" style={{ textDecoration: 'none' }}>
                    <CardContent>
                        <Grid
                            container
                            spacing={0}
                            direction="column"
                            justify="center"
                            alignItems="center"
                        >

                            <Grid item>
                                <Typography variant="h4" color="textPrimary" component="h4">
                                    {props.ticker}
                                </Typography>
                            </Grid>

                            <Grid item style={{ marginLeft: "15%" }}>
                                <Grid
                                    container
                                    direction="row"
                                    justify="center"
                                    alignItems="center"
                                >
                                    <TextColor variant="h4" align="center">
                                        {props.average}

                                    </TextColor>
                                    <CardMedia
                                        className={classes.media}
                                        component={'img'}
                                        image={summaryImage}
                                        alt="Summary Icon"
                                    />
                                </Grid>
                            </Grid>

                            <Grid item>
                                <Typography variant="body1" color="textSecondary" component="p">
                                    {"WEEKLY SCORE"}
                                </Typography>
                            </Grid>

                        </Grid>
                    </CardContent>
                </a>
            </CardActionArea >
        </Card >
    );
}
export default TwitterBar;
