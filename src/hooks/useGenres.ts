import { Genre } from "../components/GenreList";
import useData from "./useData";

export const useGenres = () => {
  return useData<Genre>("/genres");
};
