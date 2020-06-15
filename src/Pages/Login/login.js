import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from '../../Services/api'

import Layout from '../../Components/Layout/layout'

import './style.css'
import HomeImg from '../../Assets/home-img.svg'

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    async function loginHandler(e) {
        e.preventDefault()        
        try {
            const sessionData = await api.post('sessions', { email, password })
            localStorage.setItem('user_id', sessionData.data._id)
            alert(`Olá, ${sessionData.data.email}`)
            history.push('/dashboard')
        } catch(err) {
            alert('Falha no login, tente novamente')
        }
    }

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
                    <form onSubmit={loginHandler}>
                        <h2>Acessar</h2>
                        <div className="input-field">
                            <label htmlFor="email">Usuário</label>
                            <input 
                                type="text" 
                                id="email" 
                                placeholder="Email" 
                                value={email} 
                                onChange={e=>setEmail(e.target.value)}
                            />
                        </div> 
                        <div className="input-field">
                            <label htmlFor="password">Senha</label>
                            <input 
                                type="password" 
                                id="password" 
                                placeholder="Senha" 
                                value={password} 
                                onChange={e=>setPassword(e.target.value)}
                            />
                        </div>
                        <div className="buttons-2">
                            <button type="submit">Entrar</button>
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
