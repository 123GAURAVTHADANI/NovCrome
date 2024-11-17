import React from "react";
import HeaderComponent from "./Components/Header/Header";

function HOC(WrapperComponent) {
  return function Inner() {
    return (
      <React.Fragment>
        <HeaderComponent />
        <WrapperComponent />
      </React.Fragment>
    );
  };
}
export default HOC;
