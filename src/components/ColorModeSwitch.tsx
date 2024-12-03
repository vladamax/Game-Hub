import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

export const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <div>
      <HStack>
        <Switch
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        ></Switch>
        <Text whiteSpace={"nowrap"}>Dark Mode</Text>
      </HStack>
    </div>
  );
};
