import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import getCroppedImageURL from "../services/image-url";
import { CriticScore } from "./CriticScore";
import { PlatformIconList } from "./PlatformIconList";
import { Emoji } from "./Emoji";
import { Game } from "../services/gamesService";

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
        <Heading fontSize="1xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card>
  );
};
