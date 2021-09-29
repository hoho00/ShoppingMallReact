import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Stack } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const columns = [
  { field: "name", headerName: "Name", width: 200 },
  { field: "price", headerName: "Price", type: "number", width: 200 },
  { field: "numOfTx", headerName: "NumOfTx", type: "number", width: 150 },
  { field: "totalPrice", headerName: "TotalPrice", type: "number", width: 150 },
];

const GoodsTable = () => {
  const [goods, setGoods] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await axios.get("http://localhost:4001/api/transaction/").then((e) => {
        setGoods(e.data.result);
        console.log(e.data.result);
      });
    };
    fetchData();
  }, []);

  return (
    <Stack>
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={goods}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </Stack>
  );
};

export default GoodsTable;
