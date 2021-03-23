import React from "react";
import { Grid, Typography } from "@material-ui/core";
import ImgMediaCard from "./NewsCard";
import gme  from './gme.jpg';
import roblox  from './roblox.jpg';
import stim  from './stim.webp';
import WebIcon from '@material-ui/icons/Web';
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

function NewsBar() {
  //const gamestop_query = useAxios('gamestop')
  
  //  axios({ method:'get', url:'localhost:3000/api/news', responseType: 'json', headers: {'query': 'gamestop'}
  // })
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
            <WebIcon color={'secondary'} fontSize={"large"}/>
          </Grid>
          <Grid item>
            <Typography
              variant={"h4"}
              color={"secondary"}>
               Watson Discovery News
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <ImgMediaCard img={gme} desc={"Despite enthusiastic " +
        "retail investors, intense market manipulation has lead GameStop to " +
        "fall yet again"} title={"GameStop Crashes (Again)"} />
      </Grid>
      <Grid item xs={12}>
        <ImgMediaCard img={roblox} desc={"No, but their market share " +
        "sure is rising!"} title={"Is Roblox the Next Apple?"} />
      </Grid>
      <Grid item xs={12}>
        <ImgMediaCard img={stim}
                      desc={"Who could have predicted that stimulating the economy would " +
                      "stimulate the economy?"}
                      title={"BREAKING: Stimulus Sends Markets to the Moon"} />
      </Grid>
    </Grid>
  );
}

export default NewsBar;
