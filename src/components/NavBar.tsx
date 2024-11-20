import { HStack, Image } from "@chakra-ui/react";
import basketballBall from "../assets/balls/basketball-ball.png";
import tennisBall from "../assets/balls/tennis-ball.png";

export const NavBar = () => {
  return (
    <div>
      <HStack>
        <Image src={basketballBall} boxSize="40px" />
        <Image src={tennisBall} boxSize="40px" />
      </HStack>
    </div>
  );
};
