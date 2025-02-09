import { Switch } from "@chakra-ui/react";
import { DateOfMarriageButton } from "./DateOfMarriageButton";
import { IsEligibleForAdvantage } from "./IsEligibleForAdvantage";

/* eslint-disable react/prop-types */
export function FreshlyMarried({
  marriageCheckBox,
  handleTaxAdvantages,
  setDateOfMarriage,
  setTaxAdvantages,
  taxAdvantages,
  dateOfMarriage,
}) {
  return (
    <>
      <Switch
        sx={{
          ".chakra-switch__track[data-checked]:not([data-theme])": {
            backgroundColor: "#64748b",
          },
        }}
        size={"lg"}
        checked={marriageCheckBox}
        onChange={() => handleTaxAdvantages("hazas")}
        isChecked={marriageCheckBox}
      ></Switch>
      <label>Friss házasok kedvezménye</label>
      {marriageCheckBox && (
        <DateOfMarriageButton
          setDateOfMarriage={setDateOfMarriage}
          setTaxAdvantages={setTaxAdvantages}
          taxAdvantages={taxAdvantages}
        />
      )}
      {(dateOfMarriage && taxAdvantages.hazas && (
        <IsEligibleForAdvantage eligible={true} />
      )) ||
        (marriageCheckBox && dateOfMarriage && (
          <IsEligibleForAdvantage eligible={false} />
        ))}
    </>
  );
}
