// Copyright © 2025 Sustains AI, All Rights Reserved
import React from "react";
import { Label, View } from "../../common/components";
import DataGrid from "../../common/components/DataGrid";
import { useDispatch, useSelector } from "react-redux";
import { createPortfolioAction, deletePortfolioAction, fetchPortfoliosAction, updatePortfolioAction } from "../redux/actions";
import { Button } from "@mui/material";
import { makeStyles } from "tss-react/mui";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import AddEditPortfolio from "./AddEditPortfolio";

const useStyles = makeStyles()(() => ({
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "10px"
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

const PortfolioGrid = () => {

  const { classes } = useStyles()
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const userId = useSelector((state: any) => state.login?.user?.id)
  const portfolios = useSelector((state: any) => state.home?.portfolios) ?? []
  const [openAddPortfolio, setOpenAddPortfolio] = React.useState(false);
  const [openEditPortfolio, setOpenEditPortfolio] = React.useState(false);
  const [portfolio, setPortfolio] = React.useState({ name: "", description: "", id: "" });

  const handleClose = () => {
    setOpenAddPortfolio(false);
    setOpenEditPortfolio(false);
    setPortfolio({ name: "", description: "", id: "" });
  };

  const columns = [
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      minWidth: 250,
      renderHeader: () => (
        <Label title = {"Name"} bold black />
      )
    },
    {
      field: "description",
      headerName: "Description",
      flex: 1,
      minWidth: 250,
      renderHeader: () => (
        <Label title = {"Description"} bold black />
      )
    },
    {
      field: "created_at",
      headerName: "Created On",
      flex: 1,
      minWidth: 250,
      renderHeader: () => (
        <View>
          <Label title = {"Created On"} bold black />
          <Label xs title = {"MM/DD/YYYY"} black />
        </View>
      ),
      valueGetter: (value: string) => {
        const formattedDate = moment(value).format("MM/DD/YYYY");

        return formattedDate
      }
    },
    {
      field: "view",
      width: 300,
      renderHeader: () => (
        <Label title = {""} bold black />
      ),
      renderCell: (params: any) => {
        return (
          <View>
            <Button
              className = {classes.gridButton}
              onClick = {() => {
                navigate(`/portfolio/${params.row.id}`)
              }}>
              View
            </Button>
            <Button
              color = "secondary"
              className = {classes.gridButton}
              onClick = {() => {
                setPortfolio({ name: params.row.name, description: params.row.description, id: params.row.id })
                setOpenEditPortfolio(true)
              }}>
              Edit
            </Button>
            <Button
              color = "error"
              className = {classes.gridButton}
              onClick = {() => {
                dispatch(deletePortfolioAction({ userId, portfolioId: params.row.id }))
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
      dispatch(fetchPortfoliosAction({ userId }))
    }
  }, [])

  return (
    <View>
      <View className = {classes.buttonContainer}>
        <Button
          className = {classes.button}
          variant = "outlined"
          onClick = {() => dispatch(fetchPortfoliosAction({ userId }))}>
          Refetch portfolios
        </Button>
        <Button
          className = {classes.button}
          variant = "contained"
          onClick = {() => {
            setOpenAddPortfolio(true)
          }}>
          Add Portfolio
        </Button>
      </View>
      <DataGrid height = "600px" rows = {portfolios} columns = {columns} />
      <AddEditPortfolio
        type = {openAddPortfolio ? "Add" : "Edit"}
        portfolio = {portfolio}
        isVisible = {openAddPortfolio || openEditPortfolio}
        handleClose = {handleClose}
        onSubmit = {({ type, name, description, portfolioId }) => {
          if (type === "Add") {
            dispatch(createPortfolioAction({ userId, name, description }))

            return
          }
          dispatch(updatePortfolioAction({ portfolioId, name, description, userId }))
        }} />
    </View>
  );
}

export default PortfolioGrid;
