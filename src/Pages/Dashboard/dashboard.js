import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import api from '../../Services/api'

import Layout from '../../Components/Layout/layout'
import './style.css'
import UserInterview from '../../Assets/interview-img.svg'
import DesignEvaluation from '../../Assets/experiment-img.svg'

function Dashboard() {
    const user_id = localStorage.getItem("user_id");
    const [projects, setProjects] = useState([]);
    const history = useHistory()

    useEffect(()=>{
        async function loadProjects() {
            const data = await api.get(`/project/${user_id}`)
            const projectsData = data.data 
            const filteredProjects = projectsData.filter(project=>project.category.includes("train"))  
            setProjects(filteredProjects);  
        }   
    loadProjects()
    },[user_id])     
     
    function logoutHandler() {
        localStorage.clear()
        history.push('/')
    }    

    return (
        <Layout>
            <div className="layout-content">
                <button className="button-close">
                    <Link to="/login" onClick={logoutHandler}>
                        <FiLogOut color="#FFF"/>
                    </Link>
                </button>
                <div className="dashboard-container">
                    <h3>Treinar o sistema</h3>
                    <img src={UserInterview} alt=""/>                    
                    <Link to="/interview">
                        <button>                        
                            Entrevistas
                        </button>
                    </Link>
                </div>
                <div className="dashboard-container">
                    <h3>Prever Atmosferas</h3>
                    <img src={DesignEvaluation} alt=""/>
                    {projects.length >= 3 ? 
                    <Link to="/projects">
                        <button>                        
                            Projetos
                        </button>
                    </Link> 
                    : <p>O UXArch precisa de ao menos 3 entrevistas para poder prever atmosferas</p> }                           
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard
