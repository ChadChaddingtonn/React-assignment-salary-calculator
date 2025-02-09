import { Button, Flex, Text } from "@chakra-ui/react";

/* eslint-disable react/prop-types */
export function SetFamilyMemberCount({ memberCount, setMemberCount, limit }) {
  return (
    <>
      <Flex>
        <Button
          border="1px solid black"
          width="1.5rem"
          height="1.5rem"
          borderRadius="1rem"
          onClick={() =>
            setMemberCount(memberCount - 1 > 0 ? memberCount - 1 : 0)
          }
        >
          -
        </Button>
        <Text margin="0 0.2rem 0 0.2rem">{memberCount}</Text>
        <Button
          border="1px solid black"
          width="1.5rem"
          height="1.5rem"
          borderRadius="1.5rem"
          onClick={() => {
            const newCount =
              limit == null
                ? memberCount + 1
                : memberCount + 1 <= limit && memberCount + 1 <= 3
                ? memberCount + 1
                : memberCount;
            setMemberCount(newCount);
          }}
        >
          +
        </Button>
      </Flex>
    </>
  );
}
