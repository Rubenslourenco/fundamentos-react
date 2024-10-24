import { useState } from "react";

function App() {
  const [message, setMessage] = useState("Ola mundo");
  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          setMessage("Olá, fui clicado!!");
        }}
      >
        Mudar mensagem
      </button>
    </div>
  );
}

export default App;
