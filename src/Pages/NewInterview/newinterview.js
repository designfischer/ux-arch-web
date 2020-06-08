import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import Layout from "../../Components/Layout/layout";

import "./style.css";

function NewInterview() {
  const [imgUrl, setImgUrl] = useState(
    "https://baladasegura.rs.gov.br/themes/modelo-institucional/images/outros/GD_imgSemImagem.png"
  );

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
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
        <div className="newform">
          <form>
            <div className="newinputs">
              <input type="text" placeholder="Nota" className="newinputstext" />
              <input type="text" placeholder="Nome" className="newinputstext" />
            </div>
            <input
              className="newinputstext"
              type="text"
              placeholder="Imagem"
              onChange={(e) => setImgUrl(e.currentTarget.value)}
            />
            <div className="newinputs">
              <div className="fenestration">
                <h3>Aberturas</h3>
                <label htmlFor="fechado">Fechado</label>
                <input
                  type="radio"
                  id="fechado"
                  name="fenestration"
                  value="0"
                />
                <label htmlFor="semiaberto">Semiaberto</label>
                <input
                  type="radio"
                  id="semiaberto"
                  name="fenestration"
                  value="0.5"
                />
                <label htmlFor="aberto">Aberto</label>
                <input type="radio" id="aberto" name="fenestration" value="1" />
              </div>
              <div className="size">
                <h3>Tamanho</h3>
                <label htmlFor="fechado">Pequeno</label>
                <input
                  type="radio"
                  id="fechado"
                  name="fenestration"
                  value="0"
                />
                <label htmlFor="semiaberto">Médio</label>
                <input
                  type="radio"
                  id="semiaberto"
                  name="fenestration"
                  value="0.5"
                />
                <label htmlFor="aberto">Grande</label>
                <input type="radio" id="aberto" name="fenestration" value="1" />
              </div>
            </div>
            <div className="newinputs">
              <div className="light">
                <h3>Iluminação</h3>
                <label htmlFor="fechado">Escuro</label>
                <input
                  type="radio"
                  id="fechado"
                  name="fenestration"
                  value="0"
                />
                <label htmlFor="semiaberto">Médio</label>
                <input
                  type="radio"
                  id="semiaberto"
                  name="fenestration"
                  value="0.5"
                />
                <label htmlFor="aberto">Claro</label>
                <input type="radio" id="aberto" name="fenestration" value="1" />
              </div>
              <div className="color">
                <h3>Cores</h3>
                <label htmlFor="fechado">Preto e Branco</label>
                <input
                  type="radio"
                  id="fechado"
                  name="fenestration"
                  value="0"
                />
                <label htmlFor="semiaberto">Pastel</label>
                <input
                  type="radio"
                  id="semiaberto"
                  name="fenestration"
                  value="0.5"
                />
                <label htmlFor="aberto">Cores vivas</label>
                <input type="radio" id="aberto" name="fenestration" value="1" />
              </div>
            </div>
            <div className="newinputs">
              <div className="material">
                <h3>Materiais</h3>
                <label htmlFor="fechado">Naturais</label>
                <input
                  type="radio"
                  id="fechado"
                  name="fenestration"
                  value="0"
                />
                <label htmlFor="semiaberto">Misto</label>
                <input
                  type="radio"
                  id="semiaberto"
                  name="fenestration"
                  value="0.5"
                />
                <label htmlFor="aberto">Artificial</label>
                <input type="radio" id="aberto" name="fenestration" value="1" />
              </div>
              <div className="furniture">
                <h3>Mobiliário</h3>
                <label htmlFor="fechado">Poucos</label>
                <input
                  type="radio"
                  id="fechado"
                  name="fenestration"
                  value="0"
                />
                <label htmlFor="semiaberto">Alguns</label>
                <input
                  type="radio"
                  id="semiaberto"
                  name="fenestration"
                  value="0.5"
                />
                <label htmlFor="aberto">Muitos</label>
                <input type="radio" id="aberto" name="fenestration" value="1" />
              </div>
            </div>
            <div className="newinputs">
              <div className="people">
                <h3>População</h3>
                <label htmlFor="fechado">Poucas</label>
                <input
                  type="radio"
                  id="fechado"
                  name="fenestration"
                  value="0"
                />
                <label htmlFor="semiaberto">Algumas</label>
                <input
                  type="radio"
                  id="semiaberto"
                  name="fenestration"
                  value="0.5"
                />
                <label htmlFor="aberto">Muitas</label>
                <input type="radio" id="aberto" name="fenestration" value="1" />
              </div>
              <button>Cadastrar</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}

export default NewInterview;
