import "../css/Favorites.css";
import { useGameContext } from "../contexts/GameContext";
import GameCard from "../components/GameCard";

function Favorites() {
  const { favorites } = useGameContext();

  if (favorites && favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Your Favorites</h2>
        <div className="game-grid">
          {favorites.map((game) => (
            <GameCard game={game} key={game.id || game.gameID} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No favorite Games Yet</h2>
    </div>
  );
}

export default Favorites;
