import { Text, Flex } from "@chakra-ui/react";
import { SetFamilyMemberCount } from "./SetFamilyMemberCount";

/* eslint-disable react/prop-types */
export function FamilyAdvantages({
  memberCount,
  setMemberCount,
  advMemberCount,
  setAdvMemberCount,
}) {
  return (
    <>
      <Flex alignItems="center" verticalAlign="">
        <SetFamilyMemberCount
          memberCount={memberCount}
          setMemberCount={setMemberCount}
        />

        <Text margin="0 0.2rem 0 0.2rem">
          Eltartott, ebből kedvezményezett:
        </Text>

        <SetFamilyMemberCount
          memberCount={advMemberCount}
          setMemberCount={setAdvMemberCount}
          limit={memberCount}
        />
      </Flex>
    </>
  );
}
