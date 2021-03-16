import React from "react";
import { Grid, Typography } from "@material-ui/core";
import ImgMediaCard from "./NewsCard";

function NewsBar() {
  return (
    <Grid
      container
      spacing={1}
      direction="column"
      justify="flex-start"
      alignItems="center"
    >
      <Grid item xs={12}>
        <Typography
          variant={"h4"}
          color={"secondary"}>
          Watson Discovery News
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <ImgMediaCard img={"gme.jpg"} desc={"Despite enthusiastic " +
        "retail investors, intense market manipulation has lead GameStop to " +
        "fall yet again"} title={"GameStop Crashes (Again)"} />
      </Grid>
      <Grid item xs={12}>
        <ImgMediaCard img={"roblox.jpg"} desc={"No, but their market share " +
        "sure is rising!"} title={"Is Roblox the Next Apple?"} />
      </Grid>
      <Grid item xs={12}>
        <ImgMediaCard img={"stim.wbp"}
                      desc={"Who could have predicted that stimulating the economy would " +
                      "stimulate the economy?"}
                      title={"BREAKING: Stimulus Sends Markets to the Moon"} />
      </Grid>
    </Grid>
  );
}

export default NewsBar;

// const articles = (await axios.get('localhost:3000/api/news', 'gamestop')).data
// const news_element = <news stock='GameStop' articles='GameStop Stock Surging'/>;
