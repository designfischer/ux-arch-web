import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'

import Layout from '../../Components/Layout/layout'
import './style.css'
import UserInterview from '../../Assets/interview-img.svg'
import DesignEvaluation from '../../Assets/experiment-img.svg'

function Dashboard() {
    return (
        <Layout>
            <div className="layout-content">
                <button className="button-close">
                    <Link to="/login">
                        <FiLogOut color="#FFF"/>
                    </Link>
                </button>
                <div className="dashboard-container">
                    <img src={UserInterview} alt=""/>                    
                    <Link to="/interview">
                        <button>                        
                            Entrevistas
                        </button>
                    </Link>
                </div>
                <div className="dashboard-container">
                    <img src={DesignEvaluation} alt=""/>
                    <Link to="/projects">
                        <button>                        
                            Projetos
                        </button>
                    </Link>                            
                </div>
            </div>
        </Layout>
    )
}

export default Dashboard
