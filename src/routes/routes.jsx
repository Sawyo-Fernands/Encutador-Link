import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

  import React from "react";
import { Home } from "../pages/home";
import { Links } from "../pages/Links";
import { Error } from "../pages/Error";



export const Rotas=()=>{

    return (

        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/links" element={<Links/>}/>
                <Route exact path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>

    )

  }