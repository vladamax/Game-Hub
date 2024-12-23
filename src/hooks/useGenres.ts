import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import { FetchResponse } from "../services/api-client";
import genresService, { Genre } from "../services/genresService";

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: genresService.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
    initialData: { count: genres.length, results: genres },
  });

export default useGenres;
