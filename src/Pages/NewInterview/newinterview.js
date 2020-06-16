import React, { useState } from "react";
import { useHistory, Link } from 'react-router-dom'
import { FiArrowLeft } from "react-icons/fi";
import Layout from "../../Components/Layout/layout";
import api from '../../Services/api'

import "./style.css";

function NewInterview() {
  const _id = localStorage.getItem('user_id')
  const history = useHistory()

  const [url, setUrl] = useState(
    "https://baladasegura.rs.gov.br/themes/modelo-institucional/images/outros/GD_imgSemImagem.png"
  );
  const [score, setScore] = useState(5)
  const [name, setName] = useState('')
  const [fenestration, setFenestration] = useState(0.5) 
  const [size, setSize] = useState(0.5)
  const [light, setLight] = useState(0.5)
  const [color, setColor] = useState(0.5)
  const [material, setMaterial] = useState(0.5)
  const [furniture, setFurniture] = useState(0.5)
  const [people, setPeople] = useState(0.5)
  const [category, setCategory] = useState('train')

  async function newProjectHandler(e){
    e.preventDefault()
    const data = { category, name, score, url, fenestration, size, light, color, material, furniture, people }
    try{
      const responseData = await api.post('/project', data, { headers: { user_id: _id } })
      console.log(responseData)
      alert('Projeto adicionado com sucesso')
      history.push('/interview')
    } catch(err) {
      alert('Erro ao cadastrar projeto, tente novamente')
    }    
  }

  return (
    <Layout>
      <div className="newint">
        <button className="button-close">
          <Link to="/interview">
            <FiArrowLeft color="#FFF" />
          </Link>
        </button>
        <div
          className="newimg"
          style={{ backgroundImage: `url(${url})` }}
        ></div>
        <div className="newform">
          <form onSubmit={newProjectHandler}>
            <div className="newinputs">
              <input 
                type="number" 
                min="0"
                max="10"
                placeholder="Nota" 
                className="newinputstext"
                value={score}
                onChange={e=>setScore(e.target.value)} 
              />
              <input 
                type="text" 
                placeholder="Nome" 
                className="newinputstext" 
                value={name}
                onChange={e=>setName(e.target.value)}
              />
            </div>
            <input
              className="newinputstext"
              type="text"
              placeholder="Imagem"
              onChange={(e) => setUrl(e.currentTarget.value)}
            />
            <div className="newinputs">
              <div className="fenestration">
                <h3>Aberturas - Valor: {fenestration}</h3>
                <label htmlFor="fechado">Fechado</label>
                <input
                  type="radio"
                  id="fechado"
                  name="fenestration"
                  value="0"                  
                  onChange={(e)=>setFenestration(0)}
                />
                <label htmlFor="semiaberto">Semiaberto</label>
                <input
                  type="radio"
                  id="semiaberto"
                  name="fenestration"
                  value="0.5"
                  onChange={(e)=>setFenestration(0.5)}
                />
                <label htmlFor="aberto">Aberto</label>
                <input 
                  type="radio" 
                  id="aberto" 
                  name="fenestration" 
                  value="1" 
                  onChange={(e)=>setFenestration(1)}
                />
              </div>
              <div className="size">
                <h3>Tamanho - Valor: {size}</h3>
                <label htmlFor="fechado">Pequeno</label>
                <input
                  type="radio"
                  id="fechado"
                  name="size"
                  value="0"                  
                  onChange={(e)=>setSize(0)}
                />
                <label htmlFor="semiaberto">Médio</label>
                <input
                  type="radio"
                  id="semiaberto"
                  name="size"
                  value="0.5"
                  onChange={(e)=>setSize(0.5)}
                />
                <label htmlFor="aberto">Grande</label>
                <input 
                  type="radio" 
                  id="aberto" 
                  name="size" 
                  value="1" 
                  onChange={(e)=>setSize(1)}
                />
              </div>
            </div>
            <div className="newinputs">
              <div className="light">
                <h3>Iluminação - Valor: {light}</h3>
                <label htmlFor="fechado">Escuro</label>
                <input
                  type="radio"
                  id="fechado"
                  name="light"
                  value="0"                  
                  onChange={(e)=>setLight(0)}
                />
                <label htmlFor="semiaberto">Médio</label>
                <input
                  type="radio"
                  id="semiaberto"
                  name="light"
                  value="0.5"
                  onChange={(e)=>setLight(0.5)}
                />
                <label htmlFor="aberto">Claro</label>
                <input 
                  type="radio" 
                  id="aberto" 
                  name="light" 
                  value="1" 
                  onChange={(e)=>setLight(1)}
                />
              </div>
              <div className="color">
                <h3>Cores - Valor: {color}</h3>
                <label htmlFor="fechado">Preto e Branco</label>
                <input
                  type="radio"
                  id="fechado"
                  name="color"                
                  onChange={(e)=>setColor(0)}
                />
                <label htmlFor="semiaberto">Pastel</label>
                <input
                  type="radio"
                  id="semiaberto"
                  name="color"                  
                  onChange={(e)=>setColor(0.5)}
                />
                <label htmlFor="aberto">Cores vivas</label>
                <input 
                  type="radio" 
                  id="aberto" 
                  name="color"                    
                  onChange={(e)=>setColor(1)}
                />
              </div>
            </div>
            <div className="newinputs">
              <div className="material">
                <h3>Mateirais - Valor: {material}</h3>
                <label htmlFor="fechado">Naturais</label>
                <input
                  type="radio"
                  id="fechado"
                  name="material"
                  onChange={(e)=>setMaterial(0)}
                />
                <label htmlFor="semiaberto">Misto</label>
                <input
                  type="radio"
                  id="semiaberto"
                  name="material"
                  onChange={(e)=>setMaterial(0.5)}
                />
                <label htmlFor="aberto">Artificial</label>
                <input 
                  type="radio" 
                  id="aberto" 
                  name="material" 
                  onChange={(e)=>setMaterial(1)} 
                />
              </div>
              <div className="furniture">
                <h3>Mobiliário - Valor: {furniture}</h3>
                <label htmlFor="fechado">Poucos</label>
                <input
                  type="radio"
                  id="fechado"
                  name="furniture"
                  onChange={(e)=>setFurniture(0)}
                />
                <label htmlFor="semiaberto">Alguns</label>
                <input
                  type="radio"
                  id="semiaberto"
                  name="furniture"
                  onChange={(e)=>setFurniture(0.5)}
                />
                <label htmlFor="aberto">Muitos</label>
                <input 
                  type="radio" 
                  id="aberto" 
                  name="furniture" 
                  onChange={(e)=>setFurniture(1)} 
                />
              </div>
            </div>
            <div className="newinputs">
              <div className="people">
                <h3>População - Valor: {people}</h3>
                <label htmlFor="fechado">Poucas</label>
                <input
                  type="radio"
                  id="fechado"
                  name="people"
                  onChange={(e)=>setPeople(0)}
                />
                <label htmlFor="semiaberto">Algumas</label>
                <input
                  type="radio"
                  id="semiaberto"
                  name="people"
                  onChange={(e)=>setPeople(0.5)}
                />
                <label htmlFor="aberto">Muitas</label>
                <input 
                  type="radio" 
                  id="aberto" 
                  name="people"                  
                  onChange={(e)=>setFurniture(1)}
                />
              </div>
              <button type="submit">Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default NewInterview;
