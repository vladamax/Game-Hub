import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Text, Heading, Spinner } from "@chakra-ui/react";

export const GameDetail = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  if (isLoading) return <Spinner />;
  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <Text>{game.description_raw}</Text>
    </>
  );
};
