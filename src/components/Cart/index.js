import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import ProductDetail from "../ProductDetail";
import Loader from "../Loader";
import Box from "@mui/material/Box";
import { useContext } from "react";
import { CartContext } from "../../context";

export default function Cart() {
  const [items, ,] = useContext(CartContext);
  return (
    <>
      <div className="container">
        <Box component="div">
          <Typography variant="h4">
            Products Added To cART
            <br />
          </Typography>
        </Box>
        <Grid container spacing={3} alignItems="center" justifyContent="center">
          {items.length > 0 ? (
            items?.map(({ id, quantity }, i) => {
              return (
                <Grid item key={i} elevation={10} xs={12} sm={6} md={6} lg={4}>
                  <ProductDetail
                    pro_id={id}
                    quantity={quantity}
                  ></ProductDetail>
                </Grid>
              );
            })
          ) : (
            <Loader />
          )}
        </Grid>
      </div>
    </>
  );
}
