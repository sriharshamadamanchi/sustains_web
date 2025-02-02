// Copyright © 2025 Sustains AI, All Rights Reserved
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
  button: {
    fontWeight: "bold"
  }
}))

type Portfolio = {
  name: string
  description: string
  id: string
}
const AddEditPortfolio = ({ type, portfolio, isVisible, handleClose, onSubmit }: {readonly type: "Add" | "Edit", readonly portfolio: Portfolio, readonly isVisible: boolean, readonly handleClose: () => void, readonly onSubmit: ({ type, description, name, portfolioId }:{type: string, name: string, description: string, portfolioId: string}) => void}) => {

  const { classes } = useStyles()

  return (
    <Dialog
      open = {isVisible}
      fullWidth
      onClose = {handleClose}
      PaperProps = {{
        component: "form",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData as any).entries());
          const { name, description } = formJson;
          handleClose();
          onSubmit({ type, name, description, portfolioId: portfolio.id });
        }
      }}
    >
      <DialogTitle>{type === "Add" ? "Add New Portfolio" : "Update Portfolio"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {type === "Add" ? "To add a new portfolio, please enter the name and description here." : "Update the details below."}
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin = "dense"
          id = "name"
          name = "name"
          label = "Name"
          type = "text"
          fullWidth
          variant = "standard"
          defaultValue = {portfolio?.name ?? ""}
          style = {{ marginBottom: "20px", marginTop: "20px" }}
        />
        <TextField
          autoFocus
          required
          margin = "dense"
          id = "description"
          name = "description"
          label = "Description"
          type = "text"
          fullWidth
          variant = "standard"
          defaultValue = {portfolio?.description ?? ""}
        />
      </DialogContent>
      <DialogActions>
        <Button className = {classes.button} onClick = {handleClose}>Cancel</Button>
        <Button className = {classes.button} type = "submit">{type === "Add" ? "Add" : "Update"}</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddEditPortfolio
