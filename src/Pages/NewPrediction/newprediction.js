import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Layout from "../../Components/Layout/layout";
import api from "../../Services/api";

import "./style.css";

const brain = require('brain.js');

function NewInterview() { 
  const user_id = localStorage.getItem("user_id");
  const [trainProjects, setTrainProjects] = useState([])
  const [trainingValues, setTrainingValues] = useState([]);
  const [result, setResult] = useState([])

  const _id = localStorage.getItem("user_id");
  const history = useHistory();

  const [url, setUrl] = useState(
    "https://baladasegura.rs.gov.br/themes/modelo-institucional/images/outros/GD_imgSemImagem.png"
  );  
  const [name, setName] = useState("");
  const [fenestration, setFenestration] = useState(0.5);
  const [size, setSize] = useState(0.5);
  const [light, setLight] = useState(0.5);
  const [color, setColor] = useState(0.5);
  const [material, setMaterial] = useState(0.5);
  const [furniture, setFurniture] = useState(0.5);
  const [people, setPeople] = useState(0.5);
  const [category, setCategory] = useState("test");

  useEffect(()=>{    
    loadProjects()      
  },[])

  async function loadProjects() {
    const data = await api.get(`/project/${user_id}`);
    const projectsData = data.data;    
    const filteredProjects = projectsData.filter(project=>project.category.includes("train"))
    setTrainProjects(filteredProjects)    
  }

  useEffect(()=>{
    setTrainingValues(trainProjects.map(project=> ({ input: [
      parseInt(project.fenestration),
      parseInt(project.size),
      parseInt(project.light),
      parseInt(project.color),
      parseInt(project.material),
      parseInt(project.furniture),
      parseInt(project.people)
    ], output: [parseFloat(((project.score)*0.1).toFixed(1))]})))    
  },[trainProjects])
  
  console.log(trainingValues)

  async function newProjectHandler(e) {
    e.preventDefault();
    const data = {
      category,
      name,
      score: result,
      url,
      fenestration,
      size,
      light,
      color,
      material,
      furniture,
      people,
    };
    try {
      const responseData = await api.post("/project", data, {
        headers: { user_id: _id },
      });
      console.log(responseData);
      alert("Projeto adicionado com sucesso");
      history.push("/projects");
    } catch (err) {
      alert("Erro ao cadastrar projeto, tente novamente");
    }
  }  

  function predictValue(e) {
    e.preventDefault()
    const net = new brain.NeuralNetwork({ hiddenLayers: [3] });
    net.train(trainingValues);
    const pResult = net.run([fenestration,size,light,color,material,furniture,people])
    const pResultInt = pResult[0]*10
    setResult(parseFloat(pResultInt).toFixed(2))
  } 

  return (
    <Layout>
      <div className="newint">
        <button className="button-close">
          <Link to="/projects">
            <FiArrowLeft color="#FFF" />
          </Link>
        </button>
        <div
          className="newimg"
          style={{ backgroundImage: `url(${url})` }}
        ></div>
        <div className="newform">
          <form onSubmit={newProjectHandler}>           
            <input
              type="text"
              placeholder="Nome"
              className="newinputstext"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
                  onChange={(e) => setFenestration(0)}
                />
                <label htmlFor="semiaberto">Semiaberto</label>
                <input
                  type="radio"
                  id="semiaberto"
                  name="fenestration"
                  value="0.5"
                  onChange={(e) => setFenestration(0.5)}
                />
                <label htmlFor="aberto">Aberto</label>
                <input
                  type="radio"
                  id="aberto"
                  name="fenestration"
                  value="1"
                  onChange={(e) => setFenestration(1)}
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
                  onChange={(e) => setSize(0)}
                />
                <label htmlFor="semiaberto">Médio</label>
                <input
                  type="radio"
                  id="semiaberto"
                  name="size"
                  value="0.5"
                  onChange={(e) => setSize(0.5)}
                />
                <label htmlFor="aberto">Grande</label>
                <input
                  type="radio"
                  id="aberto"
                  name="size"
                  value="1"
                  onChange={(e) => setSize(1)}
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
                  onChange={(e) => setLight(0)}
                />
                <label htmlFor="semiaberto">Médio</label>
                <input
                  type="radio"
                  id="semiaberto"
                  name="light"
                  value="0.5"
                  onChange={(e) => setLight(0.5)}
                />
                <label htmlFor="aberto">Claro</label>
                <input
                  type="radio"
                  id="aberto"
                  name="light"
                  value="1"
                  onChange={(e) => setLight(1)}
                />
              </div>
              <div className="color">
                <h3>Cores - Valor: {color}</h3>
                <label htmlFor="fechado">Preto e Branco</label>
                <input
                  type="radio"
                  id="fechado"
                  name="color"
                  onChange={(e) => setColor(0)}
                />
                <label htmlFor="semiaberto">Pastel</label>
                <input
                  type="radio"
                  id="semiaberto"
                  name="color"
                  onChange={(e) => setColor(0.5)}
                />
                <label htmlFor="aberto">Cores vivas</label>
                <input
                  type="radio"
                  id="aberto"
                  name="color"
                  onChange={(e) => setColor(1)}
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
                  onChange={(e) => setMaterial(0)}
                />
                <label htmlFor="semiaberto">Misto</label>
                <input
                  type="radio"
                  id="semiaberto"
                  name="material"
                  onChange={(e) => setMaterial(0.5)}
                />
                <label htmlFor="aberto">Artificial</label>
                <input
                  type="radio"
                  id="aberto"
                  name="material"
                  onChange={(e) => setMaterial(1)}
                />
              </div>
              <div className="furniture">
                <h3>Mobiliário - Valor: {furniture}</h3>
                <label htmlFor="fechado">Poucos</label>
                <input
                  type="radio"
                  id="fechado"
                  name="furniture"
                  onChange={(e) => setFurniture(0)}
                />
                <label htmlFor="semiaberto">Alguns</label>
                <input
                  type="radio"
                  id="semiaberto"
                  name="furniture"
                  onChange={(e) => setFurniture(0.5)}
                />
                <label htmlFor="aberto">Muitos</label>
                <input
                  type="radio"
                  id="aberto"
                  name="furniture"
                  onChange={(e) => setFurniture(1)}
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
                  onChange={(e) => setPeople(0)}
                />
                <label htmlFor="semiaberto">Algumas</label>
                <input
                  type="radio"
                  id="semiaberto"
                  name="people"
                  onChange={(e) => setPeople(0.5)}
                />
                <label htmlFor="aberto">Muitas</label>
                <input
                  type="radio"
                  id="aberto"
                  name="people"
                  onChange={(e) => setPeople(1)}
                />
              </div>
              <div className="newinputs">
                <h1>Nota: {result}</h1>
              </div>           
            </div>            
            
            <button onClick={predictValue}>Prever</button>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default NewInterview;
