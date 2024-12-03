import { HStack, Image, List, ListItem, Stack, Text } from "@chakra-ui/react";
import { useGenres } from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const GenreList = () => {
  const { data } = useGenres();

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageURL(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Text>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
