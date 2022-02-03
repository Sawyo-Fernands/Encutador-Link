import React, { useEffect, useState } from "react";
import './links.css'

import {FiArrowLeft,FiLink,FiTrash} from 'react-icons/fi'

import { Link } from "react-router-dom";
import { deleteLink, getLinks } from "../../services/storelinks";
import { Modal } from "../../components/modal";

import Empty from '../../assets/empty.png'

export const Links=()=>{

   const [links,setLinks]=useState([])

   const [data,setData]=useState({})

   const [modal,setModal]=useState(false)

   const [empty,setEmpty]=useState(false)


   function handleSubmit(data){
    setData(data)
    setModal(true)

   }

   async function handleDelete(id){
      const result=await deleteLink(links,id)

        if(result.length===0){
            setEmpty(true)
        }
        setLinks(result)
   }


    useEffect(()=>{
        async function getAllLinks(){
            const result=await getLinks('@link')

            if(result.length===0){
                setEmpty(true)
            }

            setLinks(result)
        }

        getAllLinks()

    },[] )

    return (
        <div className="links-container">
            <div className="links-header">
                <Link to='/'>
                <FiArrowLeft size={38} color="white"/>
                </Link>
                
                <h1>Meus Links</h1>
            </div>

            {empty && (
                <div className="empty-list">
                    <img src={Empty} alt="" />

                </div>
            )}

            {links.map((data,index)=>{
                return (
                    <div className="links-item" key={data.id} >
                <button className="link" onClick={()=>handleSubmit(data)}>
                <FiLink size={18} color="white"/>
                {data.long_url}
                </button>
                <button className="link-delete" onClick={()=>handleDelete(data.id)}>
                    <FiTrash size={24} color="#FF5454"/>
                </button>
            </div>
                )

            })}

            {modal && <Modal linkOriginal={data.long_url} linkEncurtado={data.link} closeModal={()=>{
               setModal(false)}
            } 
            />}
            
        </div>
    )

}