import genres from "../data/genres";

export const useGenres = () => {
  return { data: genres, isLoading: false, error: null };
};
