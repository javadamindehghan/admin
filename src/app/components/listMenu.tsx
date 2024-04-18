import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import Link from 'next/link'
import React, { ReactNode } from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
interface props{
title:string;
children:ReactNode;
href:string;
}
const ListMenu = ({title,children,href}:props) => {
  return (
<Link href={href}> 
    <ListItem  disablePadding>
      <ListItemButton>
        <ListItemIcon>
         {children}
        </ListItemIcon>
        <ListItemText primary={title} />
      </ListItemButton>
    </ListItem>
    </Link>
  
  )
}
export default ListMenu
