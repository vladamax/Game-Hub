import { Game, Platform } from "../components/GameGrid";
import { Genre } from "../components/GenreList";
import useData from "./useData";

export const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null
) => {
  return useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
  );
};
