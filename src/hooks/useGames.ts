import { Game } from "../components/GameGrid";
import useData from "./useData";

export const useGames = () => {
  return useData<Game>("/games");
};
