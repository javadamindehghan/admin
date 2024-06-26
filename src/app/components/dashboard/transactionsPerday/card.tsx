import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
interface props {
  title: string;
  value: string;
  changeValue: string;
}

export default function BasicCard(props: props) {
  const { title, value, changeValue } = props;
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      
        <Typography variant="h5" component="div">
         {title}
        </Typography>
        
        <Typography variant="body2">
         {value}
        </Typography>
        <Typography variant="body2">
         {changeValue}
        </Typography>
      </CardContent>
     
    </Card>
  );
}
