import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";
interface Props {
  children: string;
}

export const ExpandableText = ({ children }: Props) => {
  if (!children) return null;

  const [expanded, setExpanded] = useState(false);

  const limit = 300;

  if (children.length <= 300) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";
  return (
    <>
      <Text>
        {summary}
        <Button
          marginLeft={1}
          fontWeight="bold"
          colorScheme="yellow"
          size="xs"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Show More"}
        </Button>
      </Text>
    </>
  );
};
