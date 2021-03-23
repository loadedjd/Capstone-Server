import React from 'react';
import axios from 'axios';
import { Grid } from '@material-ui/core';
import { Typography } from "@material-ui/core";
import ImgMediaCard from "./StockCard";

// const api = axios.create({
//   baseURL: 'https://localhost:3000/api/stock'
// })

export default class StockDisplay extends React.Component {
  
  // constructor(){
  //   super();
  //   api.get('/').then(res =>{
  //     console.log(res.data)
  //   })
  // }

  render() {
    return (
      <div>
        <Grid
        container
        spacing={1}
        direction="column"
        justify="flex-start"
        alignItems="center"
      >
      <Grid item>
        <Typography
          variant={'h4'}
          color={'secondary'} >
          Stock Statistics
        </Typography>
      </Grid>
      <Grid item>
        <ImgMediaCard img={'gme.jpg'} desc={''} title={'Graph'}/>
      </Grid>

      <Grid item>
        <ImgMediaCard img={'gme.jpg'} desc={''} title={'History of the Past 10 Years'}/>
      </Grid>

      <Grid item>
        <ImgMediaCard img={'stim.wbp'} desc={""} title={'Recommendations From Top Firms'}/>
      </Grid>
      
      </Grid>

      </div>
    )
  }
}