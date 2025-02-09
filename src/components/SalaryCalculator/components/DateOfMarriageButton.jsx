import { Button } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { DateOfMarriageForm } from "./DateOfMarriageForm";

/* eslint-disable react/prop-types */
export function DateOfMarriageButton({
  setDateOfMarriage,
  setTaxAdvantages,
  taxAdvantages,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        bgColor="#64748b"
        border="0px"
        borderRadius="0.5rem"
        fontSize="0.8rem"
        fontWeight="bold"
        color="white"
        margin="0 0 0 1rem"
        padding="0 1.2rem 0 1.2rem"
        height="1.5rem"
        _hover={{ bgColor: "#4a5a6b" }}
        onClick={onOpen}
      >
        Dátum módosítása
      </Button>

      <DateOfMarriageForm
        open={isOpen}
        handleClose={() => onClose()}
        handleSuccess={(data) => {
          if (!data) return;
          const date = new Date(data);
          setDateOfMarriage(date);
          setTaxAdvantages({
            ...taxAdvantages,
            ["hazas"]:
              new Date().setFullYear(new Date().getFullYear() - 2) < date &&
              new Date() >= date,
          });
        }}
      />
    </>
  );
}
