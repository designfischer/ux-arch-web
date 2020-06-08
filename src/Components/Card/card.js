import React from "react";
import { FiTrash } from "react-icons/fi";

import "./style.css";

function Card({
  key,
  title,
  score,
  fenestration,
  size,
  light,
  color,
  material,
  furniture,
  people,
  image,
}) {
  return (
    <div className="card" key={key}>
      <button className="button-card-close"><FiTrash/></button>
      <div className="card-img" style={{ backgroundImage: `url(${image})` }} />
      <div className="card-header">
        <div className="card-title">
          <p>{title}</p>
        </div>
        <div className="card-score">
          <p>{score}</p>
        </div>
      </div>
      <div className="card-body">
        <div className="card-info">
          <p>Aberturas</p>
          <p>{fenestration}</p>
        </div>
        <div className="card-info">
          <p>Tamanho</p>
          <p>{size}</p>
        </div>
        <div className="card-info">
          <p>Iluminação</p>
          <p>{light}</p>
        </div>
        <div className="card-info">
          <p>Cores</p>
          <p>{color}</p>
        </div>
        <div className="card-info">
          <p>Materiais</p>
          <p>{material}</p>
        </div>
        <div className="card-info">
          <p>Mobiliário</p>
          <p>{furniture}</p>
        </div>
        <div className="card-info">
          <p>População</p>
          <p>{people}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
