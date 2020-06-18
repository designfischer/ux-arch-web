import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'
import api from "../../Services/api";

import Layout from '../../Components/Layout/layout'
import './style.css'
import HomeImg from '../../Assets/home-img.svg'

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const history = useHistory()

    async function handleRegistration(e) {
        e.preventDefault()
        if (password !== confirmPass) {
            alert('As senhas estão diferentes')
            setPassword('')
            setConfirmPass('')
        }
        const data = { email, password }
        try {
            await api.post('user', data)
            alert('Cadastro realizado com sucesso. Não se esqueça de anotar seu login e senha.')
            history.push('/login')
        } catch(err) {
            alert('Erro realizar cadastro, tente novamente')
        }
    }

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
                    <form onSubmit={handleRegistration}>
                        <h2>Novo Usuário</h2>
                        <div className="input-field">
                            <label htmlFor="email">Usuário</label>
                            <input 
                                type="text" 
                                id="email" 
                                placeholder="Email"
                                required
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
                                required
                                value={password}
                                onChange={e=>setPassword(e.target.value)}
                            />
                        </div>
                        <div className="input-field">
                            <label htmlFor="cpassword">Confirmar Senha</label>
                            <input 
                                type="password" 
                                id="cpassword" 
                                placeholder="Confirmar Senha"
                                required
                                value={confirmPass}
                                onChange={e=>setConfirmPass(e.target.value)}
                            />
                        </div>
                        <div className="buttons-2">                          
                            <button type="submit">Cadastrar-se</button>                             
                        </div>                       
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default Register
