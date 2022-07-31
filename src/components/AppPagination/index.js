import React from "react";
import Pagination from "@mui/material/Pagination";
import { useState, useEffect } from "react";
import { fetchProducts } from "../../api";
const AppPagination = ({ setProducts }) => {
  const pageSize = 6;
  const [pagination, setPagination] = useState({ offset: 0, limit: pageSize });

  useEffect(() => {
    const _setProducts = async () => {
      const products = await fetchProducts(pagination.offset, pagination.limit);
      setProducts(products);
      //   console.log(products);
    };
    _setProducts();
  }, [pagination, setProducts]);

  const handlePageChange = (event, page) => {
    const offset = (page - 1) * pageSize;
    // const limit = (page - 1) * pageSize + pageSize;/
    setPagination({ ...pagination, offset });
  };

  return (
    <Pagination
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      count={10}
      onChange={handlePageChange}
    />
  );
};

export default AppPagination;
