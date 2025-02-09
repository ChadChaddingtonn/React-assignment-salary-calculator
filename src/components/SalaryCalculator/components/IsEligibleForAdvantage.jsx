import { Text } from "@chakra-ui/react";

/* eslint-disable react/prop-types */
export function IsEligibleForAdvantage({ eligible }) {
  return (
    <>
      <Text
        as="mark"
        bgColor={eligible ? "green" : "red"}
        border="0px"
        borderRadius="0.5rem"
        fontSize="0.8rem"
        fontWeight="bold"
        color="white"
        margin="0 0 0 0.5rem"
        padding="0.15rem 0.8rem 0.15rem 0.8rem"
      >
        {eligible ? "Jogosult" : "Nem jogosult"}
      </Text>
    </>
  );
}
