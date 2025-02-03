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
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import moment, { Moment } from "moment";
import { useDispatch, useSelector } from "react-redux";
import { scheduleMeetingDialog } from "../redux/actions";

const useStyles = makeStyles()(() => ({
  button: {
    fontWeight: "bold"
  }
}))

const ScheduleMeeting = () => {

  const { classes } = useStyles()
  const [date, setDate] = React.useState<Moment | null>(moment());
  const dispatch = useDispatch()
  const isVisible = useSelector((store: any) => store.home.scheduleMeetingDialog)

  const handleClose = React.useCallback(() => {
    dispatch(scheduleMeetingDialog({isVisible: false}))
  }, [])

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
          setDate(null)
        }
      }}
    >
      <DialogTitle>Schedule Meeting</DialogTitle>
      <DialogContent>
        <DialogContentText>
           To schedule a new meeting, please enter all the details here.
        </DialogContentText>

        <TextField
          autoFocus
          required
          margin = "dense"
          id = "title"
          name = "title"
          label = "Meeting Title"
          type = "text"
          fullWidth
          variant = "standard"
          defaultValue = {""}
          style = {{ marginBottom: "20px" }}
        />

        <TextField
          autoFocus
          required
          margin = "dense"
          id = "fullName"
          name = "fullName"
          label = "Full Name"
          type = "text"
          fullWidth
          variant = "standard"
          defaultValue = { ""}
          style = {{ marginBottom: "20px" }}
        />

        <TextField
          autoFocus
          required
          margin = "dense"
          id = "email"
          name = "email"
          label = "Email"
          type = "email"
          fullWidth
          variant = "standard"
          defaultValue = { ""}
          style = {{ marginBottom: "20px" }}
        />

        <LocalizationProvider dateAdapter = {AdapterMoment}>
          <DemoContainer sx = {{ marginBottom: "10px" }} components = {["DatePicker"]}>
            <DateTimePicker
              sx = {{ width: "100%" }}
              label = "Date"
              value = {date}
              onChange = {(newValue) => setDate(newValue as Moment)} />
          </DemoContainer>
        </LocalizationProvider>

      </DialogContent>
      <DialogActions>
        <Button className = {classes.button} onClick = {handleClose}>Cancel</Button>
        <Button className = {classes.button} type = "submit">Schedule</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ScheduleMeeting