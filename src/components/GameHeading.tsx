import { Heading } from "@chakra-ui/react";
import { h1 } from "framer-motion/client";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

export const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return <Heading as={h1}>{heading}</Heading>;
};
