import React, { useState } from "react";
import { Header } from "./components";
import { Route, Routes } from "react-router-dom";
import "./scss/App.scss";

function App() {
  const [cartItems] = useState([]);

  return (
    <div className="App">
      <Header cartItems={cartItems} />
      <Routes>
        <Route path="/" element={null}></Route>
      </Routes>
    </div>
  );
}

export default App;
