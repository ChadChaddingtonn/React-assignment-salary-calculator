import { SalaryCalculatorForm } from "./components/SalaryCalculatorForm";

/* eslint-disable react/prop-types */
const SalaryCalculator = ({ selectedMember, setCurrentMember, onSave }) => {
  return (
    <>
      <div id="salaryCalculator">
        <SalaryCalculatorForm
          selectedMember={selectedMember}
          setCurrentMember={setCurrentMember}
          onSave={onSave}
          selectedMemberName={selectedMember ? selectedMember.name : "Új tag"}
          selectedMemberSalary={selectedMember ? selectedMember.salary : 0}
          selectedMemberTaxedSalary={selectedMember ? selectedMember.taxed : 0}
          selectedMemberPerks={
            selectedMember
              ? selectedMember.perks
              : {
                  szja: false,
                  hazas: false,
                  szemelyi: false,
                  csaladi: false,
                }
          }
          selectedMemberID={selectedMember ? selectedMember.id : null}
          memberCount={selectedMember ? selectedMember.family[0] : 0}
          childCount={selectedMember ? selectedMember.family[1] : 0}
        />
      </div>
    </>
  );
};

export default SalaryCalculator;
