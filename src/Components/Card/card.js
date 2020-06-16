import React from "react";
import { FiTrash } from "react-icons/fi";

import "./style.css";

function Card({  
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
  handleDelete
}) {
  return (
    <div className="card">
      <button className="button-card-close" onClick={handleDelete}><FiTrash/></button>
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
          <p>Aberturas Nota {fenestration}</p>
          <p>{fenestration === 0 ? 'Fechado' : fenestration === 0.5 ? 'Semiaberto' : 'Aberto' }</p>
        </div>
        <div className="card-info">
          <p>Tamanho Nota {size}</p>
          <p>{size === 0 ? 'Pequeno' : size === 0.5 ? 'Médio' : 'Grande' }</p>
        </div>
        <div className="card-info">
          <p>Iluminação Nota {light}</p>
          <p>{light === 0 ? 'Escuro' : light === 0.5 ? 'Médio' : 'Iluminado' }</p>
        </div>
        <div className="card-info">
          <p>Cores Nota {color}</p>
          <p>{color === 0 ? 'Escala de cinza' : color === 0.5 ? 'Tons Pastéis' : 'Cores Vivas' }</p>
        </div>
        <div className="card-info">
          <p>Materiais Nota {material}</p>
          <p>{material === 0 ? 'Naturais' : material === 0.5 ? 'Misto' : 'Artificiais' }</p>
        </div>
        <div className="card-info">
          <p>Mobiliário Nota {furniture}</p>
          <p>{furniture === 0 ? 'Poucos' : furniture === 0.5 ? 'Alguns' : 'Muitos' }</p>
        </div>
        <div className="card-info">
          <p>População Nota {people}</p>
          <p>{people === 0 ? 'Poucas' : people === 0.5 ? 'Algumas' : 'Muitas' }</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
