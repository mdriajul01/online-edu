import React from "react";
import Navber from "./components/Navber/Navber";

import Footer from "./components/Footer/Footer";

import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <div>
      <Navber />

      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default App;
