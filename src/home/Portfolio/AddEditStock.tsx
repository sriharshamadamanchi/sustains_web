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
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker"
import moment, { Moment } from "moment";

const useStyles = makeStyles()(() => ({
  button: {
    fontWeight: "bold"
  }
}))

const AddEditStock = ({ type, stock, isVisible, handleClose, onSubmit }: {readonly type: "Add" | "Edit", readonly stock: any, readonly isVisible: boolean, readonly handleClose: () => void, readonly onSubmit: ({ type, newStock }:{type: string, newStock: any }) => void}) => {

  const { classes } = useStyles()
  const [currency, setCurrency] = React.useState(stock?.currency?.toLowerCase() ?? "aed");
  const [date, setDate] = React.useState<Moment | null>(moment(stock?.purchase_date));

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
          handleClose();
          const newStock = {
            symbol: formJson.symbol,
            name: formJson.name,
            quantity: formJson.quantity,
            purchase_price: formJson.purchase_price,
            purchase_date: moment(date, "MM/DD/YYYY").utc().toISOString(),
            currency: currency.toUpperCase(),
            notes: formJson.notes,
            stockId: stock?.id,
            portfolioId: stock?.portfolioId
          }
          onSubmit({ type, newStock });
          setDate(null)
        }
      }}
    >
      <DialogTitle>{type === "Add" ? "Add New Stock" : "Update Stock"}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          {type === "Add" ? "To add a new stock, please enter all the details here." : "Update the details below."}
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin = "dense"
          id = "symbol"
          name = "symbol"
          label = "Symbol"
          type = "text"
          fullWidth
          variant = "standard"
          defaultValue = {stock?.symbol ?? ""}
          style = {{ marginBottom: "20px" }}
        />

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
          defaultValue = {stock?.name ?? ""}
          style = {{ marginBottom: "20px" }}
        />
        <TextField
          autoFocus
          required
          margin = "dense"
          id = "quantity"
          name = "quantity"
          label = "Quantity"
          type = "number"
          fullWidth
          variant = "standard"
          defaultValue = {stock?.quantity ?? ""}
          style = {{ marginBottom: "20px" }}
        />

        <TextField
          autoFocus
          required
          margin = "dense"
          id = "purchase_price"
          name = "purchase_price"
          label = "Purchase Price"
          type = "number"
          fullWidth
          variant = "standard"
          defaultValue = {stock?.purchase_price ?? ""}
          style = {{ marginBottom: "20px" }}
        />

        <LocalizationProvider dateAdapter = {AdapterMoment}>
          <DemoContainer sx = {{ marginBottom: "10px" }} components = {["DatePicker"]}>
            <DatePicker
              sx = {{ width: "100%" }}
              label = "Purchase Date"
              value = {date}
              onChange = {(newValue) => setDate(newValue as Moment)} />
          </DemoContainer>
        </LocalizationProvider>

        <FormControl sx = {{ mt: 2, width: "100%", marginBottom: "10px" }}>
          <InputLabel htmlFor = "currency">Currency</InputLabel>
          <Select
            value = {currency}
            onChange = {(e) => {
              setCurrency(e.target.value)
            }}
            label = "currency"
            inputProps = {{
              name: "currency",
              id: "currency"
            }}
          >
            <MenuItem value = "aed">AED</MenuItem>
            <MenuItem value = "usd">USD</MenuItem>
            <MenuItem value = "inr">INR</MenuItem>
          </Select>
        </FormControl>

        <TextField
          autoFocus
          required
          margin = "dense"
          id = "notes"
          name = "notes"
          label = "Notes"
          type = "text"
          fullWidth
          variant = "outlined"
          defaultValue = {stock?.notes ?? ""}
          style = {{ marginBottom: "20px" }}
        />

      </DialogContent>
      <DialogActions>
        <Button className = {classes.button} onClick = {handleClose}>Cancel</Button>
        <Button className = {classes.button} type = "submit">{type === "Add" ? "Add" : "Update"}</Button>
      </DialogActions>
    </Dialog>
  );
}

export default AddEditStock
