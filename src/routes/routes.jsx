import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

  import React from "react";
import { Home } from "../pages/home";
import { Links } from "../pages/Links";



export const Rotas=()=>{

    return (

        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/links" element={<Links/>}/>
            </Routes>
        </BrowserRouter>

    )

  }