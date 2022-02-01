
import React from 'react'
import { Link } from 'react-router-dom'
import './menu.css'


export function Menu(){
    return (
        <header>
            <nav>
            <Link  to='/links'>
            <button>
            Meus Links
        </button>
        </Link>

            </nav>
        </header>
    )
}