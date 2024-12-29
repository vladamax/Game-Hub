import { Heading } from "@chakra-ui/react";
import { h1 } from "framer-motion/client";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "./gameQueryStore";

export const GameHeading = () => {
  const genreId = useGameQueryStore((store) => store.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((store) => store.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return <Heading as={h1}>{heading}</Heading>;
};
