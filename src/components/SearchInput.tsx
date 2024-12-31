import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "./gameQueryStore";
import { useNavigate } from "react-router-dom";

export const SearchInput = () => {
  const refInput = useRef<HTMLInputElement>(null);

  const setSearchText = useGameQueryStore((store) => store.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (refInput.current) {
          setSearchText(refInput.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={refInput}
          borderRadius={5}
          placeholder="Search games..."
          variant={"filled"}
        />
      </InputGroup>
    </form>
  );
};
