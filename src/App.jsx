function App() {
  let message = "Olá mundo!";
  return (
    <div>
      <h1>{message}</h1>
      <button
        onClick={() => {
          message = "Olá, fui clicado!!";
        }}
      >
        Mudar mensagem
      </button>
    </div>
  );
}

export default App;
