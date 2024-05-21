import React from "react";
import "./App.css";
import Labs from "./Labs";
import { HashRouter,Routes,Route, Navigate } from "react-router-dom";
import Kanbas from "./Kanbas";

function App() {
  return (
    <HashRouter>
    <div className="h-100"> 
    
      <Routes>
      <Route path="/" element={<Navigate to="Labs" />} />   
      <Route path="/Labs/*" element={<Labs />} />   
      <Route path="/Kanbas/*" element={<Kanbas />} />  
      </Routes>
      {/*Kanbas*/}
           
    </div>
    </HashRouter>
  );
}

export default App;
