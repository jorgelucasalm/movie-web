import React from "react";
import "../../assets/styles/global.css";
import "./style.css";
import Icon from "../../assets/public/language-icon.png";

const Index = () => (
  <>
    <nav>
      <div className="navbar">
        <h1 className="logo">Listagem de filmes</h1>

        <ul>
          <li>Filmes</li>
          <li>Series</li>
        </ul>

        <img width="24" height="24" src={Icon} alt="" />
      </div>
    </nav>

    <div className="description">
      <h2>Bem vindo ao Listagem de filmes!</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
        pariatur non nam, placeat provident quisquam ullam, totam doloribus amet
        quo doloremque quasi possimus aperiam recusandae?
      </p>
    </div>
  </>
);

export default Index;
