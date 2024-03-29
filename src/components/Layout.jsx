import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import AppRouter from "../Router/AppRouter";

export default function Layout() {
  return (
    // <div>
    //   <Navbar />
    //   <Outlet />
    // </div>
    <Grid templateAreas={`"nav" "main"`}>
      <GridItem area="nav">
        <Navbar />
      </GridItem>
      <GridItem area="main" paddingX="10px">
        <Outlet />
      </GridItem>
    </Grid>
  );
}
