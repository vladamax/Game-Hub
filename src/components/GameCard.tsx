import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import getCroppedImageURL from "../services/image-url";
import { CriticScore } from "./CriticScore";
import { Game } from "./GameGrid";
import { PlatformIconList } from "./PlatformIconList";

interface Props {
  game: Game;
}

export const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Image src={getCroppedImageURL(game.background_image)} fontSize="2xl" />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="1xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};
