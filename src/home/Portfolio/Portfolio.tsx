// Copyright © 2025 Sustains AI, All Rights Reserved
import React from "react";
import { Label, View } from "../../common/components";
import DataGrid from "../../common/components/DataGrid";
import { useDispatch, useSelector } from "react-redux";
import { addStockAction, deleteStockAction, fetchStocksAction, updateStockAction } from "../redux/actions";
import { Button } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { useParams } from "react-router-dom";
import moment from "moment";
import AddEditStock from "./AddEditStock";

const useStyles = makeStyles()(() => ({
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px"
  },
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "20px",
    height: "100vh"
  },
  button: {
    fontWeight: "bold"
  },
  gridButton: {
    width: "70px",
    height: "30px",
    fontWeight: "bold"
  }
}))

const Portfolio = () => {

  const { classes } = useStyles()
  const dispatch = useDispatch()
  const urlParams = useParams()

  const userId = useSelector((state: any) => state.login?.user?.id)
  const allStocks = useSelector((state: any) => state.home?.stocks) ?? {}
  const stocks = allStocks[urlParams.id as string] ?? []
  const [openAddStock, setOpenAddStock] = React.useState(false);
  const [openEditStock, setOpenEditStock] = React.useState(false);
  const [stock, setStock] = React.useState<any>(null);

  const handleClose = () => {
    setOpenAddStock(false);
    setOpenEditStock(false);
    setStock(null);
  };

  const columns = [
    {
      field: "symbol",
      headerName: "Symbol",
      minWidth: 150,
      renderHeader: () => (
        <Label title = {"Symbol"} bold black />
      )
    },
    {
      field: "name",
      headerName: "Name",
      minWidth: 150,
      renderHeader: () => (
        <Label title = {"Name"} bold black />
      )
    },
    {
      field: "quantity",
      headerName: "Quantity",
      minWidth: 150,
      renderHeader: () => (
        <Label title = {"Quantity"} bold black />
      )
    },
    {
      field: "purchase_price",
      headerName: "Purchase Price",
      minWidth: 150,
      renderHeader: () => (
        <Label title = {"Purchase Price"} bold black />
      )
    },
    {
      field: "currency",
      headerName: "Currency",
      minWidth: 150,
      renderHeader: () => (
        <Label title = {"Currency"} bold black />
      )
    },
    {
      field: "purchase_date",
      headerName: "Purchase Date",
      minWidth: 150,
      renderHeader: () => (
        <View>
          <Label title = {"Purchase Date"} bold black />
          <Label xs title = {"MM/DD/YYYY"} black />
        </View>
      ),
      valueGetter: (value: string) => {
        const formattedDate = moment(value).format("MM/DD/YYYY");

        return formattedDate
      }
    },
    {
      field: "notes",
      headerName: "Notes",
      minWidth: 150,
      renderHeader: () => (
        <Label title = {"Notes"} bold black />
      ),
      valueGetter: (value: string) => {
        return value || "-"
      }
    },
    {
      field: "view",
      width: 200,
      renderHeader: () => (
        <Label title = {""} bold black />
      ),
      renderCell: (params: any) => {
        return (
          <View>
            <Button
              className = {classes.gridButton}
              onClick = {() => {
                setStock(params.row)
                setOpenEditStock(true)
              }}>
              Edit
            </Button>
            <Button
              color = "error"
              className = {classes.gridButton}
              onClick = {() => {
                dispatch(deleteStockAction({ portfolioId: urlParams.id as string, stockId: params.row.id }))
              }}>
              Delete
            </Button>
          </View>
        )
      }
    }
  ];

  React.useEffect(() => {
    if (userId) {
      dispatch(fetchStocksAction({ portfolioId: urlParams.id as string }))
    }
  }, [])

  return (
    <View className = {classes.mainContainer}>
      <View>
        <View className = {classes.buttonContainer}>
          <Button
            className = {classes.button}
            variant = "outlined"
            onClick = {() => dispatch(fetchStocksAction({ portfolioId: urlParams.id as string }))}>
          Refetch portfolio
          </Button>
          <Button
            className = {classes.button}
            variant = "contained"
            onClick = {() => {
              setOpenAddStock(true)
            }}>
                  Add Stock
          </Button>
        </View>
        <DataGrid height = {"600px"} rows = {stocks} columns = {columns} />
        <AddEditStock
          isVisible = {openAddStock || openEditStock}
          handleClose = {handleClose}
          onSubmit = {({ type, newStock }) => {
            if (type === "Add") {
              dispatch(addStockAction(newStock))

              return
            }
            dispatch(updateStockAction(newStock))
          }}
          stock = {{ ...stock, portfolioId: urlParams.id }}
          type = {openAddStock ? "Add" : "Edit"} />
      </View>
    </View>
  );
}

export default Portfolio;
