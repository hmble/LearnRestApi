import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(["hello"]);
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/products/all");
        const data = await res.json();
        setData(data);
      } catch (err) {
        console.log("got error ", err);
      }
    }
    fetchData();
  });

  return (
    <div className="App">
      {data.map((d) => (
        <div className="products">
          <h3>{d.product_name}</h3>
          <p>{d.sellprice}</p>
          <p>{d.buyprice}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
