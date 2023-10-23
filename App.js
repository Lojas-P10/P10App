
import { Fragment } from "react";
import { StatusBar } from "expo-status-bar";
import Routes from "./src/Routes/index";
import LoadingScreen from "./src/screens/Home/LoadingScreen";

export default function App() {
  return (
    <Fragment>
      <StatusBar style="auto" />
      <Routes />
    </Fragment>
  );
}
