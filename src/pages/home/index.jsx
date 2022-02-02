import React, { useState } from "react";

import Logo from '../../assets/logo.png'

import {FiLink} from 'react-icons/fi'

import './home.css'

import { Menu } from "../../components/menu";
import { Modal } from "../../components/modal";

import api from '../../services/api'

import { ToastContainer, toast } from 'react-toastify';


export const Home=()=>{

    const [link,setLink]=useState('')
    const [show,setShow]=useState(false)
    const [data,setdata]=useState({})


    async function handleSubmit(){
        try{
            const response=await api.post('/shorten',{
                long_url:link
            })
            setdata(response.data)
            setShow(true)
        }catch{
            alert("Erro ao enviar URL !")
            setLink('')
        }
    }

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
                    <input type="text" 
                    placeholder="Cole seu link aqui..."
                    onChange={(e)=>{
                        setLink(e.target.value)
                    }}
                    />
                </div>
                <button 
                    onClick={handleSubmit}
                >Gerar Link</button>
            </div>
            
            {show && <Modal linkOriginal={data.long_url} linkEncurtado={data.link} closeModal={()=>{
               setShow(false)}
            } 
            />}

        </div>
        
        </>
        
    )

}