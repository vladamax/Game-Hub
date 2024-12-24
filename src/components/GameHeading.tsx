import { Heading } from "@chakra-ui/react";
import { h1 } from "framer-motion/client";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

export const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const genre = genres.results.find((genre) => genre.id === gameQuery.genreId);
  const platform = platforms.results.find(
    (platform) => platform.id === gameQuery.platformId
  );
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return <Heading as={h1}>{heading}</Heading>;
};
