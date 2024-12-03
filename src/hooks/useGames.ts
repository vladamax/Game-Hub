import { GameQuery } from "../App";
import { Game } from "../components/GameGrid";
import useData from "./useData";

export const useGames = (gameQuery: GameQuery) => {
  return useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
      },
    },
    [gameQuery]
  );
};
