import React from "react";
import ReactDOM from "react-dom";
import Login from "@/components/Login";

ReactDOM.render(<Login />, document.getElementById('app'));

if (module.hot) { // enables hot module replacement if plugin is installed
  module.hot.accept();
}
