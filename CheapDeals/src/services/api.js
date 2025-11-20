const BASE_URL = "https://www.cheapshark.com/api/1.0";

export const searchGameDeal = async (gameTitle) => {
  const response = await fetch(`${BASE_URL}/games?title=${gameTitle}`);
  const data = await response.json();
  return data;
};

//get deal details for a specific game
export const getGameDeals = async (gameID) => {
  const response = await fetch(`${BASE_URL}/deals?gameID=${gameID}`);
  const data = await response.json();
  return data;
};
