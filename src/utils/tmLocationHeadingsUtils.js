import { getGridNumericOperators } from "@mui/x-data-grid";
import TableActionButtons from "../components/TableActionButtons";

export default function handleTmLocationHeadings(
  selectRow,
  toggleEditModal,
  toggleDeleteModal
) {
  return [
    {
      field: "location_id",
      headerName: "Location ID",
      sortable: true,
      width: 200,
      type: "number",
      filterOperators: getGridNumericOperators().filter(
        (operator) =>
          operator.value === ">" ||
          operator.value === "<" ||
          operator.value === "="
      ),
    },
    {
      field: "location_name",
      headerName: "Location Name",
      sortable: true,
      width: 200,
    },
    { field: "note", headerName: "note", sortable: true, width: 500 },
    {
      field: "",
      headerName: "actions",
      sortable: false,
      width: 140,
      renderCell: (params) => {
        return (
          <TableActionButtons
            onClickEdit={() => {
              selectRow(params.id);
              toggleEditModal();
            }}
            onClickDelete={() => {
              selectRow(params.id);
              toggleDeleteModal();
            }}
          />
        );
      },
    },
  ];
}