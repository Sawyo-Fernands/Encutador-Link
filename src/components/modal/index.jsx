import React from "react";
import './modal.css'

import {FiClipboard,FiX} from 'react-icons/fi'



export function Modal({closeModal,linkOriginal,linkEncurtado}){

      async  function copyLink(){
            await navigator.clipboard.writeText(linkEncurtado)
            alert('link copiado!')
        }


    return (
       <div className="modal-container">
           <div className="modal-header">
                <h2>Link Encurtado:</h2>
                <button onClick={closeModal}>
                    <FiX size={28} color="black" />
                </button>
           </div>

           <span>
              {linkOriginal}
           </span>

           <button className="modal-link" onClick={copyLink}>
               {linkEncurtado}
               <FiClipboard size={28} color="white"/>
           </button>
       </div>
    )
}