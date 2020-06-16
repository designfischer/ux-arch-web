import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import api from "../../Services/api";

import Layout from "../../Components/Layout/layout";
import Card from "../../Components/Card/card";
import "./style.css";

function Interview() {
  const user_id = localStorage.getItem("user_id");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    const data = await api.get(`/project/${user_id}`);
    const projectsData = data.data;
    console.log(projectsData)
    const filteredProjects = projectsData.filter(project=>project.category.includes("test")) 
    setProjects(filteredProjects);
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
            <Link to="newprediction">Prever Projeto</Link>
          </button>
        </div>
        <div className="interview-container">
          {projects.map((project) => (
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
              handleDelete={() => {                
              }}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default Interview;
