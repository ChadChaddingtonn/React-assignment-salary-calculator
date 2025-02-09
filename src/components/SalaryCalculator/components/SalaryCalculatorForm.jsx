import {
  FormGroup,
  FormField,
  Form,
  Input,
  Container,
  Grid,
  GridColumn,
  GridRow,
} from "semantic-ui-react";
import { Text, Button, Switch } from "@chakra-ui/react";
import { ChangeSalaryButtonGroup } from "./ChangeSalaryButtonGroup";
import { CalculatedSalary } from "./CalculatedSalary";
import { useState, useEffect } from "react";
import { FreshlyMarried } from "./FreshlyMarried";
import { FamilyAdvantages } from "./FamilyAdvantages";
import { saveMember, deleteMember } from "../../FamilyMemberData/data";
import { v4 as uuidv4 } from "uuid";

/* eslint-disable react/prop-types */
export function SalaryCalculatorForm({
  selectedMember,
  setCurrentMember,
  onSave,
  selectedMemberName,
  selectedMemberSalary,
  selectedMemberTaxedSalary,
  selectedMemberPerks,
  selectedMemberID,
  memberCount,
  childCount,
}) {
  const [taxedSalary, setTaxedSalary] = useState(0);

  const [salaryInput, setSalaryInput] = useState(selectedMemberSalary);
  const [nameInput, setNameInput] = useState(selectedMemberName);
  const [taxAdvantages, setTaxAdvantages] = useState(selectedMemberPerks);
  const [marriageSwitch, setMarriageSwitch] = useState(
    selectedMemberPerks.hazas
  );
  const [dateOfMarriage, setDateOfMarriage] = useState(null);
  const [familyMemberCount, setFamilyMemberCount] = useState(0);
  const [advantageMemberCount, setAdvantageMemberCount] = useState(0);

  const handleSalaryInputChange = () => (e) => {
    const salary = e.target.value.replace(/\D/g, "");

    if (e.target.value.slice(-1) === "F") {
      setSalaryInput(parseInt(salary.slice(0, -1)));
      return;
    }

    setSalaryInput(parseInt(salary));
  };

  const handleSliderChange = () => (e) => {
    const salary = e.target.value;
    setSalaryInput(parseInt(salary));
  };

  const handleNameInputChange = () => (e) => {
    setNameInput(e.target.value);
  };

  const handleTaxAdvantages = (advantage) => {
    if (advantage == "hazas") {
      if (marriageSwitch)
        setTaxAdvantages({ ...taxAdvantages, [advantage]: false });
      else
        setTaxAdvantages({
          ...taxAdvantages,
          [advantage]:
            new Date().setFullYear(new Date().getFullYear() - 2) <
            dateOfMarriage,
        });

      setMarriageSwitch(!marriageSwitch);
      return;
    }

    setTaxAdvantages({
      ...taxAdvantages,
      [advantage]: !taxAdvantages[advantage],
    });
  };

  useEffect(() => {
    setSalaryInput(selectedMemberSalary);
    setTaxedSalary(selectedMemberTaxedSalary);
    setNameInput(selectedMemberName !== "Új tag" ? selectedMemberName : "");
    setTaxAdvantages(selectedMemberPerks);
    setMarriageSwitch(selectedMemberPerks.hazas);
    setFamilyMemberCount(memberCount);
    setAdvantageMemberCount(childCount);
  }, [
    selectedMemberSalary,
    selectedMemberTaxedSalary,
    selectedMemberName,
    selectedMemberPerks,
    memberCount,
    childCount,
  ]);

  useEffect(() => {
    let tempTaxedSalary = Math.round(salaryInput * 0.665);

    if (taxAdvantages.szja) {
      if (salaryInput > 499952) {
        tempTaxedSalary = 499952 + Math.round((salaryInput - 499952) * 0.665);
      } else {
        tempTaxedSalary = salaryInput;
      }
    }

    if (taxAdvantages.hazas) {
      tempTaxedSalary += 5000;
    }

    if (taxAdvantages.szemelyi) {
      const taxAmount = salaryInput - tempTaxedSalary;

      tempTaxedSalary += taxAmount > 77300 ? 77300 : taxAmount;
    }

    if (taxAdvantages.csaladi) {
      const membersCount = advantageMemberCount > 3 ? 3 : advantageMemberCount;
      tempTaxedSalary += membersCount * 10000;
    }
    setTaxedSalary(tempTaxedSalary);
  }, [salaryInput, advantageMemberCount, taxAdvantages, marriageSwitch]);

  const removeCurrentMemer = () => {
    setCurrentMember(deleteMember(selectedMemberID));
  };

  return (
    <>
      <Grid columns="equal">
        <GridColumn width={12}>
          <Form>
            <h2>{selectedMemberName.toUpperCase()} BÉRÉNEK KISZÁMÍTÁSA</h2>
            <FormGroup grouped>
              <FormField
                label="Családtag neve"
                control={Input}
                placeholder={
                  selectedMemberName === "Új tag" ? "Név" : selectedMemberName
                }
                value={nameInput}
                onChange={handleNameInputChange()}
              />
              <Text opacity="0.5">
                {!nameInput && "Add meg a családtag nevét!"}
              </Text>
              <FormField
                label="Bruttó bér"
                control={Input}
                placeholder={`${selectedMemberSalary.toLocaleString(
                  "de-DE"
                )} Ft`}
                value={
                  !salaryInput
                    ? ""
                    : `${salaryInput.toLocaleString("de-DE")} Ft`
                }
                onChange={handleSalaryInputChange()}
              />
              <Text opacity="0.5">
                {!salaryInput && "Add meg a bruttó béred!"}
              </Text>
              <Container textAlign="center">
                <Input
                  id="salarySlider"
                  type="range"
                  min="0"
                  max="10000000"
                  value={salaryInput}
                  onChange={handleSliderChange()}
                ></Input>
                <br />
                <ChangeSalaryButtonGroup
                  setSalaryInput={setSalaryInput}
                  salaryInput={salaryInput}
                ></ChangeSalaryButtonGroup>
              </Container>
            </FormGroup>
            <Text fontWeight={700} fontSize="1.1rem">
              KEDVEZMÉNYEK
            </Text>
            <FormGroup grouped id="kedvezmenyek">
              <Switch
                sx={{
                  ".chakra-switch__track[data-checked]:not([data-theme])": {
                    backgroundColor: "#64748b",
                  },
                }}
                size={"lg"}
                isChecked={taxAdvantages.szja}
                onChange={() => handleTaxAdvantages("szja")}
              ></Switch>
              <label className="check-box-label">
                25 év alattiak SZJA mentessége
              </label>
              <br />
              <FreshlyMarried
                marriageCheckBox={marriageSwitch}
                handleTaxAdvantages={handleTaxAdvantages}
                setDateOfMarriage={setDateOfMarriage}
                setTaxAdvantages={setTaxAdvantages}
                taxAdvantages={taxAdvantages}
                dateOfMarriage={dateOfMarriage}
              />
              <br />
              <Switch
                sx={{
                  ".chakra-switch__track[data-checked]:not([data-theme])": {
                    backgroundColor: "#64748b",
                  },
                }}
                size={"lg"}
                isChecked={taxAdvantages.szemelyi}
                onChange={() => handleTaxAdvantages("szemelyi")}
              ></Switch>
              <label className="check-box-label">Személyi adókedvezmény</label>
              <br />
              <Switch
                sx={{
                  ".chakra-switch__track[data-checked]:not([data-theme])": {
                    backgroundColor: "#64748b",
                  },
                }}
                size={"lg"}
                isChecked={taxAdvantages.csaladi}
                onChange={() => handleTaxAdvantages("csaladi")}
              ></Switch>
              <label className="check-box-label">Családi kedvezmény</label>
              {taxAdvantages.csaladi && (
                <FamilyAdvantages
                  memberCount={familyMemberCount}
                  setMemberCount={setFamilyMemberCount}
                  advMemberCount={advantageMemberCount}
                  setAdvMemberCount={setAdvantageMemberCount}
                ></FamilyAdvantages>
              )}
              <br />
            </FormGroup>
          </Form>
        </GridColumn>
        <GridColumn>
          <Container textAlign="right">
            <Button
              bgColor="#64748b"
              color="white"
              borderRadius="0.5rem"
              padding="10px"
              alignContent="center"
              marginBottom="1rem"
              _hover={{ bgColor: "#4a5a6b" }}
              onClick={() => {
                if (!nameInput || !salaryInput) return;

                const newID = selectedMemberID || uuidv4();

                const newMember = {
                  id: newID,
                  name: nameInput,
                  salary: salaryInput,
                  taxed: taxedSalary,
                  perks: taxAdvantages,
                  family: [familyMemberCount, advantageMemberCount],
                };

                saveMember(newMember);

                setCurrentMember(newMember);

                onSave();
              }}
            >
              Mentés
            </Button>
            <br />
            {selectedMember && (
              <Button
                background="white"
                border="none"
                padding="10px"
                _hover={{ bgColor: "#f0f0f0" }}
                textAlign={"center"}
                onClick={() => removeCurrentMemer()}
              >
                <i className="trash icon" />
              </Button>
            )}
          </Container>
        </GridColumn>
        <GridRow id="calculatedSalary">
          <Container textAlign="center">
            <CalculatedSalary salary={taxedSalary || 0} />
          </Container>
        </GridRow>
      </Grid>
    </>
  );
}
