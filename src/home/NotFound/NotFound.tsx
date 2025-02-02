// Copyright © 2025 Sustains AI, All Rights Reserved
import React from "react";
import { makeStyles } from "tss-react/mui";
import { strings } from "../../common/i18n";
import { Label, View } from "../../common/components";

const useStyles = makeStyles()(() => ({
  mainContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    alignItems: "center",
    justifyContent: "center"
  }
}))

export const NotFound = () => {

  const { classes } = useStyles()

  return (
    <View className = {classes.mainContainer}>
      <Label black xxl title = {strings("pageNotFound")} center />
    </View>
  )
}
