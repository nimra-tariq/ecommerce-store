import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context";
import useIsInCart from "../../hooks/useIsInCart";
import { toast } from "react-toastify";
import InfoIcon from "@mui/icons-material/Info";
import { Tooltip } from "@mui/material";

export default function ProductCard({ name, title, id, price, image }) {
  const [, , addToCart] = useContext(CartContext);
  const [added] = useIsInCart(id);

  return (
    <>
      <Box sx={{ minWidth: 230 }}>
        <Card variant="outlined">
          <Card sx={{ minWidth: 230 }}>
            <CardContent>
              {added ? (
                <Tooltip title="Item Added to cart">
                  <InfoIcon
                    sx={{ color: "purple" }}
                  />
                </Tooltip>
              ) : null}
              <Link to={`/products/${id}`}>
                <div>
                  <img src={image} alt={name} height="180px" />
                </div>
              </Link>
              <Typography variant="h6">
                {title}
                <br />
              </Typography>
              <Typography variant="h5" component="div">
                {price}.00$
              </Typography>
              <div aria-label="add to cart">
                <button
                  title="add to cart"
                  disabled={added}
                  onClick={() => {
                    addToCart(id);
                    toast.info("Item Added to cart");
                  }}
                  style={{
                    border: "2px solid purple",
                    borderRadius: "10px",
                    padding: "10px",
                  }}
                >
                  <AddShoppingCartIcon color="primary" />
                </button>
              </div>
            </CardContent>
          </Card>
        </Card>
      </Box>
    </>
  );
}
