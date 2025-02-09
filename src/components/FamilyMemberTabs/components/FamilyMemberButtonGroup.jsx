import { ButtonGroup } from "@chakra-ui/react";
import { FamilyMemberButton } from "./FamilyMemberButton";
import { familyMembers } from "../../FamilyMemberData/data";

/* eslint-disable react/prop-types */
export function FamilyMemberButtonGroup({ selectedMember, handleClick }) {
  const selectedMemberID = selectedMember ? selectedMember.id : "";

  return (
    <>
      <ButtonGroup
        floated="left"
        borderRadius={"0.3rem"}
        bgColor={"rgb(226, 232, 240)"}
        outline={"rgb(226, 232, 240) solid 0.3rem"}
        marginLeft={"0.4rem"}
      >
        {familyMembers.map((member) => (
          <FamilyMemberButton
            key={member.id}
            name={member.name}
            isSelected={selectedMemberID === member.id}
            handleClick={() => handleClick(member)}
          />
        ))}
      </ButtonGroup>
    </>
  );
}
