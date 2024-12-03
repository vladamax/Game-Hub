import { Game } from "../components/GameGrid";
import { Genre } from "../components/GenreList";
import useData from "./useData";

export const useGames = (selectedGenre: Genre | null) => {
  return useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre,
  ]);
};
