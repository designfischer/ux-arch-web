import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import Layout from '../../Components/Layout/layout'
import './style.css'
import HomeImg from '../../Assets/home-img.svg'

function Register() {
    return (
        <Layout>
            <div className="layout-content">
                <button className="button-close">
                    <Link to="/login">
                        <FiArrowLeft color="#FFF"/>
                    </Link>
                </button>
                <div className="register-container">
                    <img src={HomeImg} alt=""/>
                </div>
                <div className="register-container">
                    <form>
                        <h2>Novo Usuário</h2>
                        <div className="input-field">
                            <label htmlFor="email">Usuário</label>
                            <input type="text" id="email" placeholder="Email"/>
                        </div> 
                        <div className="input-field">
                            <label htmlFor="password">Senha</label>
                            <input type="password" id="password" placeholder="Senha"/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="cpassword">Confirmar Senha</label>
                            <input type="password" id="cpassword" placeholder="Confirmar Senha"/>
                        </div>
                        <div className="buttons-2">                          
                            <button>Cadastrar-se</button>                             
                        </div>                       
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Register
