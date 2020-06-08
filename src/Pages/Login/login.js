import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import Layout from '../../Components/Layout/layout'

import './style.css'
import HomeImg from '../../Assets/home-img.svg'

function Login() {
    return (
        <Layout>
            <div className="layout-content">                
                <button className="button-close">
                    <Link to="/">
                        <FiArrowLeft color="#FFF"/>
                    </Link>
                </button>
                <div className="login-container">
                    <img src={HomeImg} alt=""/>
                </div>
                <div className="login-container">
                    <form>
                        <h2>Acessar</h2>
                        <div className="input-field">
                            <label htmlFor="email">Usuário</label>
                            <input type="text" id="email" placeholder="Email"/>
                        </div> 
                        <div className="input-field">
                            <label htmlFor="password">Senha</label>
                            <input type="password" id="password" placeholder="Senha"/>
                        </div>
                        <div className="buttons-2">
                            <button>Entrar</button>
                            <Link to="/register">
                                <button>Cadastrar-se</button>
                            </Link>                            
                        </div>                       
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Login
