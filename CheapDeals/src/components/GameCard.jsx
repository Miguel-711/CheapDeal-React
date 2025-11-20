import '../css/GameCard.css'

function GameCard({game}) {

    function onFavoriteClick () {
        alert("Added")
    }

    return <div className="game-card">
        <div className="game-poster">
            <img className="game-pic" src={game.thumb} alt={game.external} />
            <div className="game-overlay">
                <button className="favorite-btn" onClick={onFavoriteClick}>
                    ♡
                </button>
            </div>
        </div>
        <div className="game-info">
            <h3>{game.external}</h3>
            <p>Lowest Price: {game.cheapest}</p>
            <a href={`https://www.cheapshark.com/redirect?dealID=${game.cheapestDealID}`}><button> Buy now</button></a>
        </div>
    </div>
}

export default GameCard 