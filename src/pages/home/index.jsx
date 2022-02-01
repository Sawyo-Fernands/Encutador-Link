import React from "react";

import Logo from '../../assets/logo.png'

import {FiLink} from 'react-icons/fi'
import './home.css'
import { Menu } from "../../components/menu";

export const Home=()=>{

    return (
        <>
        <Menu/>
        <div className="container-home">
            <div className="logo">
                <img src={Logo} alt="Encurta Link" />
                <h1>EncurtaLink</h1>
                <span>Coloque seu link para encurtar 👇</span>
            </div>

            <div className="area-input">
                <div>
                    <FiLink size={24} color="#FFF"/>
                    <input type="text" placeholder="Cole seu link aqui..."/>
                </div>
                <button>Gerar Link</button>
            </div>
        </div>
        </>
        
    )

}