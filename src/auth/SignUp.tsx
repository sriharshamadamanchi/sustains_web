// Copyright © 2025 Sustains AI, All Rights Reserved
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import MuiCard from "@mui/material/Card";
import { styled } from "@mui/material/styles";
import { makeStyles } from "tss-react/mui";
import { Label, View } from "../common/components";
import { registerAction } from "./redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",
  width: "100%",
  padding: theme.spacing(4),
  gap: theme.spacing(2),
  margin: "auto",
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  [theme.breakpoints.up("sm")]: {
    width: "450px"
  },
  ...theme.applyStyles("dark", {
    boxShadow:
      "hsla(220, 30%, 5%, 0.5) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.08) 0px 15px 35px -5px"
  })
}));

const useStyles = makeStyles()((theme) => ({
  mainContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.light.background
  },
  button: {
    fontWeight: theme.fontWeight.bold
  }
}))

export default function SignUp() {
  const [emailError, setEmailError] = React.useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = React.useState("");
  const [passwordError, setPasswordError] = React.useState(false);
  const [passwordErrorMessage, setPasswordErrorMessage] = React.useState("");
  const [nameError, setNameError] = React.useState(false);
  const [nameErrorMessage, setNameErrorMessage] = React.useState("");

  const { classes } = useStyles()
  const dispatch = useDispatch()

  const validateInputs = () => {
    const email = document.getElementById("email") as HTMLInputElement;
    const password = document.getElementById("password") as HTMLInputElement;
    const name = document.getElementById("name") as HTMLInputElement;

    let isValid = true;

    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError(false);
      setEmailErrorMessage("");
    }

    if (!password.value || password.value.length < 6) {
      setPasswordError(true);
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }

    if (!name.value || name.value.length < 1) {
      setNameError(true);
      setNameErrorMessage("Name is required.");
      isValid = false;
    } else {
      setNameError(false);
      setNameErrorMessage("");
    }

    return isValid;
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (nameError || emailError || passwordError) {
      return;
    }
    const data = new FormData(event.currentTarget);
    dispatch(registerAction({ name: data.get("name") as string, email: data.get("email") as string, password: data.get("password") as string }))
  };

  const isLoggedIn = useSelector((state: any) => state.login.isLoggedIn)

  React.useEffect(() => {
    if (isLoggedIn) {
      window.location.href = "/dashboard"
    }
  }, [isLoggedIn])

  return (
    <View className = {classes.mainContainer}>
      <Card variant = "outlined">
        <Label black xxxl title = {"Sign up"} />
        <Box
          component = "form"
          onSubmit = {handleSubmit}
          sx = {{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <FormControl>
            <FormLabel htmlFor = "name">Full name</FormLabel>
            <TextField
              autoComplete = "name"
              name = "name"
              required
              fullWidth
              id = "name"
              placeholder = "Jon Snow"
              error = {nameError}
              helperText = {nameErrorMessage}
              color = {nameError ? "error" : "primary"}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor = "email">Email</FormLabel>
            <TextField
              required
              fullWidth
              id = "email"
              placeholder = "your@email.com"
              name = "email"
              autoComplete = "email"
              variant = "outlined"
              error = {emailError}
              helperText = {emailErrorMessage}
              color = {passwordError ? "error" : "primary"}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor = "password">Password</FormLabel>
            <TextField
              required
              fullWidth
              name = "password"
              placeholder = "••••••"
              type = "password"
              id = "password"
              autoComplete = "new-password"
              variant = "outlined"
              error = {passwordError}
              helperText = {passwordErrorMessage}
              color = {passwordError ? "error" : "primary"}
            />
          </FormControl>
          <Button
            type = "submit"
            fullWidth
            variant = "contained"
            onClick = {validateInputs}
            className = {classes.button}
          >
              Sign up
          </Button>
        </Box>
        <Box sx = {{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Typography sx = {{ textAlign: "center" }}>
              Already have an account?{" "}
            <Link
              href = "/"
              variant = "body2"
              sx = {{ alignSelf: "center" }}
            >
                Sign in
            </Link>
          </Typography>
        </Box>
      </Card>
    </View>
  );
}
