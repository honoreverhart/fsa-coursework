import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div id="navbar">
      <Link to={"/red"}>
        <h2>Red</h2>
      </Link>
      <Link to={"/blue"}>
        <h2>Blue</h2>
      </Link>
      <Link to={"/green"}>
        <h2>Green</h2>
      </Link>
    </div>
  );
}
