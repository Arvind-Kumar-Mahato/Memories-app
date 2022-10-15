import React from "react";
import {Container} from '@material-ui/core';
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Auth from "./Components/Auth/Auth";

function App() {
  



 
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/">
            {/* <Home /> */}
          </Route>
          <Route path="/auth">
            {/* <Auth /> */}
          </Route>
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
