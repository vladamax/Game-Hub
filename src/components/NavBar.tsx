import { HStack, Image } from "@chakra-ui/react";
import basketballBall from "../assets/balls/basketball-ball.png";
import tennisBall from "../assets/balls/tennis-ball.png";
import { ColorModeSwitch } from "./ColorModeSwitch";

export const NavBar = () => {
  return (
    <div>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={basketballBall} boxSize="40px" />
        <Image src={tennisBall} boxSize="40px" />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};
