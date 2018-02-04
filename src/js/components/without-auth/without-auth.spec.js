import React from "react";
import ReactDOM from "react-dom";
import WithoutAuth from "./without-auth";

// Component test sample

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<WithoutAuth />, div);
});
