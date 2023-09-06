import React from "react";
import { Fragment } from "react"; // Ensure React is imported
import { StatusBar } from "expo-status-bar";
import Routes from "./src/Routes/index";

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" />
      <Routes />
    </Fragment>
  );
}
