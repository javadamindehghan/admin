"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";
import { Box, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import ToggleColorMode from "./themeMode";
import ResponsiveDrawer from "./SideMenu";
import Header from "./Header";
interface Props {
  children: React.ReactNode;
}
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });
function Provider(props: Props) {
  const { children } = props;

  return (
    <SessionProvider> 
      <ToggleColorMode>
      <ResponsiveDrawer>
     
       {children}
       </ResponsiveDrawer>
      </ToggleColorMode>
     
    </SessionProvider>
  );
}

export default Provider;
