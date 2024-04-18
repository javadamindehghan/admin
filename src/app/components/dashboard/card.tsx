import React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardItem from "./cardItem";

interface Props {}

function Item(props: Props) {
  const {} = props;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}  lg={3}>
        <CardItem title="Total sales" value='426' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry"/>
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <CardItem title="Total value" value='$4265985' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <CardItem title="order value" value='$426' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
      </Grid>
      <Grid item xs={12} sm={6} lg={3}>
        <CardItem title="conversation rate" value='0.62%' description="Lorem Ipsum is simply dummy text of the printing and typesetting industry" />
      </Grid>
      <Grid>

      </Grid>
    </Grid>
  );
}

export default Item;
