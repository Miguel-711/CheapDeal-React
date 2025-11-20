import GameCard from "../components/GameCard";
import { useState } from "react";
import { searchGameDeal, getGameDeals } from "../services/api";
import "../css/Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim() || loading) return;

    setLoading(true);
    try {
      const searchResults = await searchGameDeal(searchQuery);
      setGames(searchResults);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
    //setSearchQuery("");
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for Game..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="game-grid">
          {games.map((game) => (
            <GameCard game={game} key={game.gameID} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
