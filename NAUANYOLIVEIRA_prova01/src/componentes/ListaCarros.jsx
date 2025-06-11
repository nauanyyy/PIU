import React from "react";
import { carros } from "../dados/dados_carro";
import "./ListaCarros.css";

const ListaCarros = () => {
  /* Variável que contém o filtro que pega a lista de todos os carros, e filtra os que tem o ano maior do que 2019*/
  const carrossuperiores = carros.filter((carro) => carro.ano > 2019);

  return (
    <div className="lista-carros">
      <h2>Todos os Carros</h2>
      <ul>
        {/*Aqui o map pega a lista de todos os carros com todas as suas informações e retorna apenas o que é solicitado, que por exemplo, foi apenas o modelo e a cor, não listando o restante das informações*/}
        {carros.map((carro) => (
          /*O resultado vai ser guiado usando o prop Key, que fala quais elementos foram selecionados pelo map, para poder atualizar o DOM corretamente*/
          <li key={carro.id}>
            {carro.modelo} - {carro.cor}
          </li>
        ))}
      </ul>

      <h2>Carros de anos superiores a 2019</h2>
      <ul>
        {/*Aqui é chamada a variável constante de carrossuperiores, que filtra os carros com anos superiores a 2019 */}
        {carrossuperiores.map((carro) => (
          /*O map é chamado novamente, para listar apenas o modelo e o ano */
          <li key={carro.id}>
            {carro.modelo} - {carro.ano}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaCarros;