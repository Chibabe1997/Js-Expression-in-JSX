import React from "react";
import ReactDOM from "react-dom";

const name = "Chidinma Ojukwu";
// const year = new Date().getFullYear();

ReactDOM.render(
  <div>
    <h1>Chi's Space</h1>
    <p>This space is Created by {name}!</p>
    <p>Copyright {new Date().getFullYear()}</p>
  </div>,
  document.getElementById("root")
);

//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
