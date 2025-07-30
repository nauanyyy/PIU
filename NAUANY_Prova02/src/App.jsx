import React, { useState } from "react";
import Login from "./componentes/Login";
import PostsPorId from "./componentes/PostsPorId";

export default function App() {

  const [backgroundColor, setBackgroundColor] = useState("white");
  const [chave, setChave] = useState("");

  return (
    <div>
      <Login setBackgroundColor={setBackgroundColor} setChave={setChave} />
      <PostsPorId />
    </div>
  );
}