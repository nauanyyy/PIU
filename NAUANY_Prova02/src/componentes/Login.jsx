import React, { useState } from "react";
import "./Prova.css";

export default function Login({ setBackgroundColor }) {
  const [login, setLogin] = useState("");
  const [chave, setChave] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (chave === "AlunoIFRN") {
      const cores = ["#3b0d85", "#8b74b3", "#782dfa"];

      const corAleatoria = cores[Math.floor(Math.random() * cores.length)];

      setBackgroundColor(corAleatoria);
      document.body.style.backgroundColor = corAleatoria;

      console.log("Você acertou!");
    } else {
      setBackgroundColor("white");
      document.body.style.backgroundColor = "white";
      console.log("Palavra-chave errada, tente novamente!");
    }

    setLogin("");
    setChave("");
  };

  return (
    <div className="prova">
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite um Login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          style={{ display: "block", padding: "8px", marginBottom: "10px", width: "85%", marginLeft: "15px"}}
        />

        <input
          type="text"
          placeholder="Digite uma Palavra Chave"
          value={chave}
          onChange={(e) => setChave(e.target.value)}
          style={{ display: "block", padding: "8px", marginBottom: "10px", width: "85%", marginLeft: "15px"}}
        />

        <input type="submit" value="Enviar" 
        style={{ padding: "10px 18px", cursor: "pointer", backgroundColor: "#6c63ff", color: "white", border: "none", borderRadius: "6px", fontWeight: "600", fontSize: "1rem", marginTop: "10px", marginLeft: "100px"}} 
        />

      </form>
    </div>
  );
}