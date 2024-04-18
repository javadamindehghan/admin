"use client";
import React from "react";
import BasicCard from "./card";
import { Grid } from "@mui/material";

import DataChart from "../../chart/DataChart";

interface Props {}

function TransactionsPerDay(props: Props) {
  const chartData = [12, 19, 3, 5, 2];
  const chartLabels = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  const {} = props;

  return (
    <Grid container>
      <Grid xs={12} lg={8}>
        <DataChart />
       
      </Grid>
      <Grid xs={12} lg={3}>
        <Grid container direction="column">
          <Grid item xs={12} sm={6} lg={12} m={4}>
            <BasicCard title="Total Products" value="1725" changeValue="60%" />
          </Grid>
          <Grid item xs={12} sm={6} lg={12} m={4}>
            <BasicCard title="buy-to-detail" value="0" changeValue="0" />
          </Grid>
          <Grid item xs={12} sm={6} lg={12} m={4}>
            <BasicCard title="refunds" value="0" changeValue="0%" />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default TransactionsPerDay;
