import '../css/GameCard.css'
import { useGameContext } from '../contexts/GameContext'

function GameCard({game}) {
    const { isFavorite, addToFavorites, removeFromFavorites } = useGameContext();
        const stableId = game.cheapestDealID || game.gameID || game.id;
        const favorite = isFavorite(stableId);

    function onFavoriteClick (e) {
        e.preventDefault()
            if (favorite) {
                removeFromFavorites(stableId);
            } else {
                const favObj = { ...game, id: stableId };
                addToFavorites(favObj);
            }
    }

    return <div className="game-card">
        <div className="game-poster">
            <img className="game-pic" src={game.thumb} alt={game.external} />
            <div className="game-overlay">
                    <button
                        className={`favorite-btn ${favorite ? "active" : ""}`}
                        onClick={onFavoriteClick}
                        aria-pressed={favorite}
                        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
                    >
                        {favorite ? "♥" : "♡"}
                </button>
            </div>
        </div>
        <div className="game-info">
            <h3>{game.external}</h3>
            <p>Lowest Price: {game.cheapest}</p>
                <a href={`https://www.cheapshark.com/redirect?dealID=${game.cheapestDealID || game.cheapestDealID}`}>
                    <button> Buy now</button>
                </a>
        </div>
    </div>
}

export default GameCard 