import React from "react";
import "./App.css";
import { json } from "body-parser";

function App() {
  async function fetchData() {
    const res = await fetch("/products/all");
    const data = await res.json();
    console.log(data);
  }
  fetchData();

  return <div className="App">{}</div>;
}

export default App;
