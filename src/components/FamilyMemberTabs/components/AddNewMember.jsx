import { Button, ButtonGroup } from "@chakra-ui/react";

/* eslint-disable react/prop-types */
export function AddNewMember({ handleClick, focusButton }) {
  return (
    <>
      <ButtonGroup
        floated="left"
        borderRadius={"0.3rem"}
        bgColor={"rgb(226, 232, 240)"}
        outline={"rgb(226, 232, 240) solid 0.3rem"}
        marginLeft={"1rem"}
      >
        <Button
          padding={"0"}
          border={"0.3rem"}
          bgColor={"transparent"}
          _hover={{ bgColor: "rgba(255, 255, 255, 0.5)" }}
          onClick={handleClick}
          id={(focusButton && "selected") || ""}
        >
          <div>
            <i className="plus icon" />
          </div>
        </Button>
      </ButtonGroup>
    </>
  );
}
