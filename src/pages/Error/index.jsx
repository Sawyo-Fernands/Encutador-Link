import React from "react";
import './error.css'
import { Link } from "react-router-dom";
import ErrorIMG from '../../assets/notfound.png'


export const Error=()=>{
    return(
       <div className="container-error">
           <img src={ErrorIMG} alt="notfound" />
           <h1>Página não encontrada !</h1>
           <Link to="/" className="button-home">Voltar para Home</Link>
       </div>
    )
}