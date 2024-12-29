import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "./gameQueryStore";

export const SearchInput = () => {
  const refInput = useRef<HTMLInputElement>(null);

  const setSearchText = useGameQueryStore((store) => store.setSearchText);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (refInput.current) setSearchText(refInput.current.value);
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
