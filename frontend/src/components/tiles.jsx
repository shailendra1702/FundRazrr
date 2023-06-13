import * as React from "react";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import CampaignPaper from "./card";

function Tiles() {
  return (
    <Box
      sx={{ flexGrow: 1, justifyContent: "space-around", alignItems: "start" }}
    >
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={3} md={3} key={index}>
            <CampaignPaper />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Tiles;


