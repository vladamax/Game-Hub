import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import platformsService from "../services/platformsService";
import ms from "ms";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: platformsService.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });
export default usePlatforms;
