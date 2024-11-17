import React from "react";
import BodyComponent from "../BodyComponent/BodyComponent";
import HeaderComponent from "../Header/Header";
import HOC from "../../HOC";

function MainComponent() {
  return (
    <React.Fragment>
      <BodyComponent />
    </React.Fragment>
  );
}
export default HOC(MainComponent);
