import { Grid } from "@mui/material";
import React from "react";
import DoughnutChart from "../../chart/DoughnutChart";

interface Props {}

function TransactionsBottomRow(props: Props) {
  const {} = props;

  return (
    <Grid container spacing={2}>
      <Grid  xs={12} sm={2}>
        <DoughnutChart />
      </Grid>
      <Grid  xs={12} sm={2}>
        <DoughnutChart />
      </Grid>
      <Grid  xs={12} sm={2}>
        <DoughnutChart />
      </Grid>
      <Grid  xs={12} sm={2}>
        <DoughnutChart />
      </Grid>
    </Grid>
  );
}

export default TransactionsBottomRow;
