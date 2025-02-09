import { AddNewMember } from "./components/AddNewMember";
import { FamilyMemberButtonGroup } from "./components/FamilyMemberButtonGroup";

/* eslint-disable react/prop-types */
const FamilyMemberTabs = ({
  setCurrentMember,
  selectedMember,
  handleClick,
  familyMemberCount,
}) => {
  const createNewMember = () => {
    setCurrentMember(null);
  };

  return (
    <>
      {familyMemberCount > 0 && (
        <FamilyMemberButtonGroup
          selectedMember={selectedMember}
          handleClick={handleClick}
        />
      )}
      <AddNewMember
        handleClick={createNewMember}
        focusButton={selectedMember === null}
        setCurrentMember={setCurrentMember}
      />
    </>
  );
};

export default FamilyMemberTabs;
