// Copyright © 2025 Sustains AI, All Rights Reserved
import React from "react"
import { ThemeProvider } from "@mui/material/styles"
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { ErrorBoundary } from "./common/ErrorBoundary/ErrorBoundary"
import { themeProvider } from "./common/theme"
import { persistor, store } from "./common/store"
import Dashboard from "./home"

const App = () => {

  return (
    <Provider store = {store}>
      <PersistGate loading = {null} persistor = {persistor}>
        <ErrorBoundary>
          <ThemeProvider theme = {themeProvider}>
            <Dashboard />
          </ThemeProvider>
        </ErrorBoundary>
      </PersistGate>
    </Provider>
  )
}

export default App
