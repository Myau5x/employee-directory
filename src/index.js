import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css'

//////https://randomuser.me/api/?results=9

/*
fetch('https://randomuser.me/api/?results=9')
  .then(response => response.json())
  .then(data => {console.log(data)

ReactDOM.render(<App employees={data.results}/>, document.getElementById("root"));}) */

ReactDOM.render(<App />, document.getElementById("root"));
