import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from '../../Services/api'

import Layout from "../../Components/Layout/layout";
import Card from "../../Components/Card/card";
import "./style.css";
import Loading from '../../Assets/loading.gif'

function Interview() {
  const user_id = localStorage.getItem('user_id')
  const [projects, setProjects] = useState([])  

  useEffect(()=>{
    async function loadProjects() {
      const data = await api.get(`/project/${user_id}`)
      const projectsData = data.data 
      const filteredProjects = projectsData.filter(project=>project.category.includes("train")) 
      setProjects(filteredProjects);         
    }  
    loadProjects()
  },[user_id])  
  
  async function handleDelete(_id) {
    try{
      const dataD = await api.delete(`/project/${_id}`, { headers: { user_id: user_id } })
      console.log(dataD)
      alert('Item deletado com sucesso')
      setProjects(projects.filter(project=>project._id !== _id))
    } catch(err) {
      alert('Falha ao deletar item')
    }
  }

  return (
    <Layout>
      <div className="interview-page">
        <button className="button-close">
          <Link to="/dashboard">
            <FiArrowLeft color="#FFF" />
          </Link>
        </button>
        <div className="interview-container">
          <button>
            <Link to="newinterview">Nova Entrevista</Link>
          </button>
        </div>
        {projects.length === 0 ? <img src={Loading} alt=""/> : 
        <div className="interview-container">
          {projects.map(project => 
            <Card   
              key={project._id}           
              score={project.score}
              title={project.name}
              fenestration={project.fenestration}
              size={project.size}
              light={project.light}
              color={project.color}
              material={project.material}
              furniture={project.furniture}
              people={project.people}
              image={project.url}
              handleDelete={()=>{handleDelete(project._id)}}
            />
          )}          
        </div>
        }        
      </div>
    </Layout>
  );
}

export default Interview;
