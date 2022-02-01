import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Heading from "./Heading";
import SubHeading from "./SubHeading";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "35%",
    [theme.breakpoints.down("sm")]: {
      width: "80%",
    },
  },
}));

const Wrapper = () => {
  const classes = useStyles();

  const subtitle =
    "Welcome to APP NAME! Here are some functions of our app";

  return (
    <header className={classes.root}>
      <Heading title="What We Do" />
      <SubHeading title={subtitle} />
    </header>
  );
};

export default Wrapper;
