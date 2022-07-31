import React from "react";
import ImageCarousel from "../Carousel";
import { Box, Grid, Container, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Main = () => {
  return (
    <>
      <Container>
        <Grid container sx={{ my: 5 }}>
          <Grid item xs={12} sm={6}>
            <Box py={8}>
              <Typography variant="h2" component="div">
                ColoShop, Your online Store
              </Typography>
              <Typography variant="h6" component="div">
                Buy what you want, your store at your home
              </Typography>
              <NavLink to="/Home" style={{textDecoration:"none"}}>
              <Button variant="contained" sx={{my:2}} color="secondary">
                Take me There <ArrowForwardIcon></ArrowForwardIcon>
              </Button>
              </NavLink>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <ImageCarousel></ImageCarousel>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Main;
