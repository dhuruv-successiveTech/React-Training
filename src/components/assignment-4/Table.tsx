"use client";
import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns:GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "name",
    headerName: "Name",
    description: "This column has a value getter and is not sortable.",
    width: 160,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 160,
  },
  {
    field: "gender",
    headerName: "Gender",
    description: "This column has a value getter and is not sortable.",
    width: 160,
  },
];

const rows = [
  { id: 1, name: "Rajesh", age: 25, gender: "Male" },
  { id: 2, name: "Rita", age: 22, gender: "Female" },
  { id: 3, name: "Rajneesh", age: 25, gender: "Male" },
  { id: 4, name: "Ritika", age: 16, gender: "Female" },
  { id: 5, name: "Abhijeet", age: 22, gender: "Male" },
  { id: 6, name: "Yash", age: 20, gender: "Male" },
  { id: 7, name: "Gaurav", age: 24, gender: "Male" },
  { id: 8, name: "Nitin", age: 26, gender: "Male" },
];

const paginationModel = { page: 0, pageSize: 5 };

const MyTable = () => {
  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
};

export default MyTable;
