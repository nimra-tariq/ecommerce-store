import { useParams } from "react-router-dom";
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";
import { getProductDetail } from "../../api";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useContext } from "react";
import { CartContext } from "../../context";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

export default function ProductDetail({ pro_id, quantity }) {
  const { id } = useParams();
  const [detail, setDetail] = useState({});
  const [, , , incrementItem, decrementItem, removeItem] =
    useContext(CartContext);

  useEffect(() => {
    const getDetail = async () => {
      const res = await getProductDetail(id || pro_id);
      //   console.log(res, "detail product");
      setDetail(res);
    };
    getDetail();
  }, [id, pro_id]);

  return (
    <>
      <div className="container">
        <Box sx={{ minWidth: 230 }}>
          <Card variant="outlined">
            <Card sx={{ minWidth: 230 }}>
              <CardContent>
                <div>
                  <img
                    src={detail?.category?.image}
                    alt={detail.title}
                    height="180px"
                  />
                </div>
                <Typography variant="h6">
                  {detail?.title}
                  <br />
                </Typography>
                <Typography variant="h5" component="div">
                  {detail?.price}.00$
                </Typography>
                <Typography variant="h6" component="div">
                  {detail?.description}.00$
                </Typography>
                {pro_id ? (
                  <>
                    <Box
                      component="div"
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <div
                        onClick={() => incrementItem(pro_id)}
                        title="increment item"
                      >
                        <AddCircleIcon sx={{ color: "purple" }} />
                      </div>
                      <div>
                        <Typography variant="h6">{quantity}</Typography>
                      </div>
                      <div
                        title="decrement item"
                        onClick={() => decrementItem(pro_id)}
                      >
                        <RemoveCircleIcon sx={{ color: "purple" }} />
                      </div>
                    </Box>
                    <div onClick={() => removeItem(pro_id)} title="Remove item">
                      <RemoveShoppingCartIcon sx={{ color: "purple" }} />
                    </div>
                  </>
                ) : null}
              </CardContent>
            </Card>
          </Card>
        </Box>
      </div>
    </>
  );
}
