import React, { useState } from "react";
import "./Contador.css";

/*Criei uma variável constante chamada "Contador" para armazenar outras (necessárias para obter os valores) e para retornar o front-end da contagem*/
const Contador = () => {

    /*Variável para guardar a contagem de cliques, começando por 0*/
    const [contador, setContador] = useState(0);

    /*Variáveis que determinam que a contagem funcione, substituindo o valor da variável acima por um novo valor, seja diminuindo ou aumentando, de acorde com o número de cliques nos botões, lá embaixo é chamada cada uma dessas variáveis, de acordo com a ação do usuário*/
    const incrementar = () => setContador(contador + 1);
    const decrementar = () => setContador(contador - 1);

    return (
        <div className="contador">
        <h2>Contador de Cliques</h2>
        <p>Valor: {contador}</p>

        {/* Chamei uma classe de nome que embaixo eu falo o que elementos que contém ela devem fazer, que no caso é mudar o css, quando o botão for de acrescentar (positivo), que ele aumente (estilo definido no css, então o atual vai ser substituído por esse novo), caso se enquadre no requisito de ser maior que 10*/}
        <div className="botoes">
            <button
                /* Fiz um evento onclick, para cada vez que o botão for clicado, que chame a variável incrementar, que adiciona 1. Depois, chamo a classe que expliquei acima, que muda o css, caso se enquadre no requisito */
                onClick={incrementar}
                className={contador > 10 ? "botao positivo" : "botao"}
            >
                    Incrementar
            </button>
            <button
                /* Outro evento onclick, para que cada vez que esse botão de decremento for clicado, que subtraia 1. Logo após chamo a classe decrementar, para mudar o css, caso o valor seja negativo.  */
                onClick={decrementar}
                className={contador < 0 ? "botao negativo" : "botao"}
            >
                    Decrementar
            </button>
        </div>
        </div>
    );
};

export default Contador;