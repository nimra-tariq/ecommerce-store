import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { useState } from "react";
import ProductCard from "../ProductCard";
import Loader from "../Loader";
import Box from "@mui/material/Box";
import AppPagination from "../AppPagination";

export default function Home() {
  const [products, setProducts] = useState([]);

  return (
    <>
      <div className="container">
        <AppPagination setProducts={setProducts}></AppPagination>
        <Box component="div">
          <Typography variant="h4">
            New Arrivals
            <br />
          </Typography>
        </Box>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          {products.length > 0 ? (
            products?.map(
              (
                { category: { name, image }, id, price, title, description },
                i
              ) => {
                return (
                  <Grid
                    item
                    key={i}
                    elevation={10}
                    xs={12}
                    sm={6}
                    md={6}
                    lg={4}
                  >
                    <ProductCard
                      key={id}
                      id={id}
                      name={name}
                      image={image}
                      price={price}
                      title={title}
                      description={description}
                    ></ProductCard>
                  </Grid>
                );
              }
            )
          ) : (
            <Loader />
          )}
        </Grid>
      </div>
    </>
  );
}
