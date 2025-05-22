function TemaToggle({ temaAtual, alternarTema }) {
    return (
      <button onClick={alternarTema}>
        Mudar para {temaAtual === "light" ? "Dark" : "Light"} Mode
      </button>
    );
  }
  
  export default TemaToggle;