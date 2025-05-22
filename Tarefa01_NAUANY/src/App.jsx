import { useState } from "react";
import "./index.css";

import alegria from "./assets/alegria.png";
import ansiedade from "./assets/ansiedade.png";
import medo from "./assets/medo.png";
import nojinho from "./assets/nojinho.png";
import raiva from "./assets/raiva.png";
import tristeza from "./assets/tristeza.png";

export default function App() {
  const [tema, setTema] = useState("light");
  const [selecionado, setSelecionado] = useState(null);

  const listaPersonagens = [
    { nome: "Alegria", imagem: alegria, descricao: "Sempre feliz, otimista e cheia de energia positiva." },
    { nome: "Ansiedade", imagem: ansiedade, descricao: "Preocupada com o futuro, às vezes um pouco nervosa." },
    { nome: "Medo", imagem: medo, descricao: "Cauteloso, sempre atento aos perigos e evitando riscos." },
    { nome: "Nojinho", imagem: nojinho, descricao: "Seletiva, com forte senso de aversão e muita atitude." },
    { nome: "Raiva", imagem: raiva, descricao: "Explosivo e direto, mas com sinceridade e paixão." },
    { nome: "Tristeza", imagem: tristeza, descricao: "Sensível e profunda, ajuda a refletir e se conectar." },
  ];

  function alternarTema() {
    setTema((t) => (t === "light" ? "dark" : "light"));
  }

  return (
    <div className={`app ${tema}`}>
      <div className="tema">
        <button onClick={alternarTema}>
          Mudar para {tema === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      <div className="galeria">
        {listaPersonagens.map((p, i) => (
          <div
            key={i}
            className="card"
            onClick={() => setSelecionado(p)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === "Enter") setSelecionado(p); }}
          >
            <img src={p.imagem} alt={p.nome} />
            <h3>{p.nome}</h3>
          </div>
        ))}
      </div>

      {selecionado && (
        <div className="detalhes">
          <h2>{selecionado.nome}</h2>
          <img
            src={selecionado.imagem}
            alt={selecionado.nome}
            className="imagem-detalhe"
          />
          <p>{selecionado.descricao}</p>
        </div>
      )}
    </div>
  );
}