import FamilyMemberTabs from "./FamilyMemberTabs/FamilyMemberTabs";
import HouseholdSummary from "./HouseholdSummary/HouseholdSummary";
import SalaryCalculator from "./SalaryCalculator/SalaryCalculator";
import { Grid, GridColumn, GridRow, Segment } from "semantic-ui-react";
import { useState } from "react";
import { familyMembers } from "./FamilyMemberData/data";

const HouseholdSalaryCalculator = () => {
  const [currentMember, setCurrentMember] = useState(
    familyMembers[0] ? { ...familyMembers[0] } : null
  );
  const [saveStatus, setSaveStatus] = useState(false);

  const handleSave = () => {
    setSaveStatus(!saveStatus);
  };

  const handleClick = (member) => {
    setCurrentMember(member);
  };

  return (
    <>
      <header>
        <FamilyMemberTabs
          setCurrentMember={setCurrentMember}
          selectedMember={currentMember}
          handleClick={handleClick}
          familyMemberCount={familyMembers.length}
        />
      </header>
      <main>
        <Grid columns={2}>
          <GridRow>
            <GridColumn>
              <Segment>
                <SalaryCalculator
                  selectedMember={currentMember}
                  setCurrentMember={setCurrentMember}
                  onSave={handleSave}
                />
              </Segment>
            </GridColumn>
            <GridColumn>
              <Segment>
                <HouseholdSummary
                  setSelectedMember={setCurrentMember}
                  selectedMember={currentMember}
                />
              </Segment>
            </GridColumn>
          </GridRow>
        </Grid>
      </main>
    </>
  );
};

export default HouseholdSalaryCalculator;
