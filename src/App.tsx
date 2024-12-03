import { Box, Grid, GridItem, Show, Stack } from "@chakra-ui/react";
import { useState } from "react";
import "./App.css";
import { GameGrid, Platform } from "./components/GameGrid";
import GenreList, { Genre } from "./components/GenreList";
import { NavBar } from "./components/NavBar";
import { PlatformSelector } from "./components/PlatformSelector";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" padding={5}>
          <GenreList
            selectedGenre={selectedGenre}
            onSelectGenre={(genre: Genre) => setSelectedGenre(genre)}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Stack paddingY={2}>
          <Box width={4}>
            <PlatformSelector
              selectedPlatform={selectedPlatform}
              onSelectPlatform={(platform: Platform) =>
                setSelectedPlatform(platform)
              }
            />
          </Box>
          <GameGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
          />
        </Stack>
      </GridItem>
    </Grid>
  );
}

export default App;
