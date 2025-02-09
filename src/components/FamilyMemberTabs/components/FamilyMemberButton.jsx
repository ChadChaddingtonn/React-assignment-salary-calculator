import { Button } from "@chakra-ui/react";

/* eslint-disable react/prop-types */
export function FamilyMemberButton({ name, isSelected, handleClick }) {
  return (
    <>
      <Button
        border={"0.3rem"}
        bgColor={"transparent"}
        _hover={{ bgColor: "rgba(255, 255, 255, 0.5)" }}
        onClick={handleClick}
        id={(isSelected && "selected") || ""}
      >
        {name}
      </Button>
    </>
  );
}
