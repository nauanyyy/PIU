import { useState } from "react";
import "./Base.css";

function BotaoDeCor() {
    const [cor, setCor] = useState('azul'); 
    const mudarCor = () => {
        setCor(cor === 'azul' ? 'vermelho' : 'azul');
    };

    return (
        <>
            <div>
                <button onClick={mudarCor}>Clique</button>
            </div>
            <p>Cor atual: {cor}</p>
        </>
    );
}

function Base() {
    return (
        <>
            <h2>Nauany</h2>
            <BotaoDeCor />
        </>
    );
}

export default Base;
