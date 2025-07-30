import React, { useState, useEffect } from "react";
import "./Prova.css";

const PostsPorId = () => {

  const [userId, setUserId] = useState("");

  const [posts, setPosts] = useState([]);

  const [buscar, setBuscar] = useState(false);


  const handleBuscar = () => {
    setBuscar(true);
  };

  useEffect(() => {

    if (buscar && userId >= 1 && userId <= 10) {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((resposta) => resposta.json())  
        .then((dados) => {
          const postsFiltrados = dados.filter((post) => post.userId === parseInt(userId));
          setPosts(postsFiltrados);
        })
        .catch((erro) => console.error("Erro ao buscar posts:", erro));

    } else {
      setPosts([]);
    }

    setBuscar(false);
  }, [buscar, userId]);

  return (
    <div className="prova">
      <h2>Buscar Posts por ID do Usuário (1 a 10)</h2>

      <input
        type="number"
        min="1"
        max="10"
        placeholder="Digite um userID (1-10)"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <button onClick={handleBuscar}>Buscar</button>

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>ID:</strong> {post.id} - <strong>Título:</strong> {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsPorId;