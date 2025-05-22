import { useState } from "react";
import "./index.css";
import Galeria from "./components/Galeria";
import Detalhes from "./components/Detalhes";
import Tema from "./components/Tema";

import alegria from "./assets/alegria.png";
import ansiedade from "./assets/ansiedade.png";
import medo from "./assets/medo.png";
import nojinho from "./assets/nojinho.png";
import raiva from "./assets/raiva.png";
import tristeza from "./assets/tristeza.png";

const lista = [
  { nome: "Alegria", imagem: alegria, descricao: "Personagem sempre feliz e otimista." },
  { nome: "Ansiedade", imagem: ansiedade, descricao: "Está sempre preocupada com o futuro." },
  { nome: "Medo", imagem: medo, descricao: "Teme tudo, mas é muito atento aos perigos." },
  { nome: "Nojinho", imagem: nojinho, descricao: "Extremamente seletiva e cheia de atitude." },
  { nome: "Raiva", imagem: raiva, descricao: "Explosivo, mas muito honesto e direto." },
  { nome: "Tristeza", imagem: tristeza, descricao: "Sensível e profunda, ajuda nos momentos difíceis." },
];

function App() {
  const [tema, setTema] = useState("light");
  const [personagemSelecionado, setPersonagemSelecionado] = useState(null);

  const alternarTema = () => {
    setTema((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${tema}`}>
      <Tema temaAtual={tema} alternarTema={alternarTema} />
      <Galeria personagens={lista} onSelecionar={setPersonagemSelecionado} />
      <Detalhes personagem={personagemSelecionado} />
    </div>
  );
}

export default App;