import React from "react";
import ReactDOM from "react-dom";
import ProductList from "./ProductList";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Product Hunt</h1>
      <ProductList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
