import "./GameOver.css";

const GameOver = ({ retry, score }) => {
  return (
    <div>
      <h1>Fim do Jogo!</h1>
      <h2>
        A sua pontuaçã foi: <span>{score}</span>
      </h2>
      <button onClick={retry}>Restart game</button>
    </div>
  );
};

export default GameOver;
