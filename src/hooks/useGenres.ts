import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import { FetchResponse } from "../services/api-client";
import genresService, { Genre } from "../services/genresService";
import ms from "ms";

const useGenres = () =>
  useQuery<FetchResponse<Genre>, Error>({
    queryKey: ["genres"],
    queryFn: genresService.getAll,
    staleTime: ms("24h"),
    initialData: genres,
  });

export default useGenres;
