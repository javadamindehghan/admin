'use client'
import React from "react";
import Box from "@mui/material/Box";
import { DataGridPro } from "@mui/x-data-grid-pro";
import { useDemoData } from "@mui/x-data-grid-generator";
interface Props {}

function Page(props: Props) {
  const { data } = useDemoData({
    dataSet: "Employee",
    rowLength: 500,
    editable: true,
  });
 
  console.log( data);
  

  return (
    <Box sx={{ height: '100vh', width: "100%" }}>
      <DataGridPro
        {...data}
      
        
        loading={data.rows.length === 0}
        rowHeight={38}
       pagination={true}
      
        disableRowSelectionOnClick
      />
    </Box>
  );
}

export default Page;
