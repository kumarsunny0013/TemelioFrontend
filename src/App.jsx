import React from "react";
import Nonprofit from "./component/NonProfit.jsx";
import Foundation from "./component/Foundation.jsx";
import Email from "./component/Email.jsx";

const App = () => {
  return (
    <div>
      <h1>Foundation Manager</h1>
      <Nonprofit />
      <Foundation />
      <Email />
    </div>
  );
};

export default App;
