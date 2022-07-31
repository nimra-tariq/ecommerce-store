import React from "react";
import Carousel from "react-material-ui-carousel";
import { images } from "../../constants";
import Box from "@mui/material/Box";
import Home from "@mui/icons-material/Home";

const ImageCarousel = () => {
  return (
    <>
      <Carousel
        // IndicatorIcon={<Home />} // Previous Example
        indicatorIconButtonProps={{
          style: {
            padding: "10px", // 1
            color: "purple", // 3
          },
        }}
        navButtonsProps={{
          style: {
            backgroundColor: "purple",
            borderRadius: 20,
          },
        }}
      >
        {images.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </>
  );
};

export default ImageCarousel;

function Item({ item }) {
  return (
    <Box sx={{ minWidth: 230 }}>
      <img src={item} alt="storeImages" height="350px" fit="crop" />
    </Box>
  );
}
