import { Text } from "@chakra-ui/react";

/* eslint-disable react/prop-types */
export function CalculatedSalary({ salary }) {
  return (
    <>
      <h2>Számított nettó bér:</h2>
      <Text
        fontSize="1.5rem"
        color="white"
        bg="#334155"
        as="mark"
        padding="1.5rem"
        borderRadius="1rem"
      >
        {`${salary.toLocaleString("de-DE")} Ft`}
      </Text>
    </>
  );
}
