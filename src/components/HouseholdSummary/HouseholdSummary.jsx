import { Text } from "@chakra-ui/react";
import { HouseHoldSummaryTable } from "./components/HouseHoldSummaryTable";

/* eslint-disable react/prop-types */
const HouseholdSummary = ({ setSelectedMember, selectedMember }) => {
  return (
    <>
      <Text
        textAlign="center"
        fontWeight={800}
        fontSize="2rem"
        paddingTop="4rem"
        paddingBottom="2rem"
      >
        Háztartás összesített jövedelme
      </Text>
      <HouseHoldSummaryTable
        setSelectedMember={setSelectedMember}
        selectedMember={selectedMember}
      ></HouseHoldSummaryTable>
    </>
  );
};

export default HouseholdSummary;
