import React from 'react'
import { Link } from 'react-router-dom'

import Layout from '../../Components/Layout/layout'

import './style.css'
import HomeImg from '../../Assets/home-img.svg'

function Main() {     

    return (
        <Layout>
            <div className="layout-content">
                <div className="home-container">
                    <img src={HomeImg} alt=""/>
                </div>
                <div className="home-container">
                    <h1>UXArch</h1>
                    <h3>Ferramenta de previsão da experiência atmosférica de usuários em projetos de arquitetura</h3>
                    <div className="buttons-2">
                        <Link to="/login">
                            <button>Acessar</button>
                        </Link>                        
                        <button>Sobre</button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Main