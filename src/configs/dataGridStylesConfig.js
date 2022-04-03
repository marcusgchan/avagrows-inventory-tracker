const dataGridStyles = {
  background: "#C4C4C4",
  ".MuiButton-root, .MuiButton-startIcon": {
    color: "black",
  },
  ".MuiDataGrid-row:nth-of-type(even), .MuiDataGrid-row:nth-of-type(even) button":
    {
      background: "#E5E5E5",
    },
  ".MuiDataGrid-row:nth-of-type(odd), .MuiDataGrid-row:nth-of-type(odd) button":
    {
      background: "#C4C4C4",
    },
  ".MuiDataGrid-columnHeaders": {
    background: "#0A432F",
    color: "white",
  },
  ".MuiDataGrid-columnSeparator": {
    visibility: "hidden",
  },
  ".MuiDataGrid-columnHeaderTitleContainer, .MuiDataGrid-cell": {
    justifyContent: "center",
  },
  ".MuiDataGrid-cell:focus": {
    outline: "none",
  },
};

export default dataGridStyles;
