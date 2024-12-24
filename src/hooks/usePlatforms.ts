import { useQuery } from "@tanstack/react-query";
import platformsService from "../services/platformsService";
import platforms from "../data/platforms";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: platformsService.getAll,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: platforms,
  });
export default usePlatforms;
