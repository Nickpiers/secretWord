import "./StartScreen.css";

const StartScreen = ({ startGameButton }) => {
  return (
    <div className="start">
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogar</p>
      <button onClick={startGameButton}>Começar o jogo</button>
      <p>
        Jogo de <span>Nicolas Pierina</span>
      </p>
    </div>
  );
};

export default StartScreen;
