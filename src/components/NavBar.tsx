import { HStack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.webp";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";

export const NavBar = () => {
  return (
    <div>
      <HStack padding="10px">
        <Link to="/">
          <Image src={logo} boxSize="40px" objectFit="cover" />
        </Link>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};
