import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import Layout from "../../Components/Layout/layout";
import Card from "../../Components/Card/card";
import "./style.css";

function Interview() {
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
        <div className="interview-container">
          <Card
            key="1"
            score="7.5"
            title="Quarto 1"
            fenestration="Fechado"
            size="Pequeno"
            light="Médio"
            color="Pastel"
            material="Misto"
            furniture="Muitos"
            people="Poucas"
            image="https://baladasegura.rs.gov.br/themes/modelo-institucional/images/outros/GD_imgSemImagem.png"
          />
          <Card
            key="1"
            score="7.5"
            title="Quarto 1"
            fenestration="Fechado"
            size="Pequeno"
            light="Médio"
            color="Pastel"
            material="Misto"
            furniture="Muitos"
            people="Poucas"
            image="https://baladasegura.rs.gov.br/themes/modelo-institucional/images/outros/GD_imgSemImagem.png"
          />
          <Card
            key="1"
            score="7.5"
            title="Quarto 1"
            fenestration="Fechado"
            size="Pequeno"
            light="Médio"
            color="Pastel"
            material="Misto"
            furniture="Muitos"
            people="Poucas"
            image="https://baladasegura.rs.gov.br/themes/modelo-institucional/images/outros/GD_imgSemImagem.png"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Interview;
