import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Explorer from "./explorer";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& > *": {
        margin: theme.spacing(1)
      }
    }
  })
);

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Explorer value={"123"}></Explorer>
    </div>
  );
}
