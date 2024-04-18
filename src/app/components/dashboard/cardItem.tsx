import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";``
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';
import { Card, CardContent } from "@mui/material";
interface Props {
    title:string;
    value:string;
    description:string;

}

function CardItem(props: Props) {
  const {title,value,description} = props;

  return (
    <>
    <Card sx={{padding:'10px'}}>
      <CardContent className="flex justify-center mb-2">
        <Typography marginRight={'20px'} >{title}</Typography>
        <Tooltip title={description}>
          <InfoIcon sx={{cursor:'pointer'}}/>
            
        </Tooltip>
      </CardContent>
      <Typography fontSize={24} textAlign={'center'}>{value}</Typography>
    </Card>
   
    
  </>
  );
}

export default CardItem;
