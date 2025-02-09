import { Button, ButtonGroup } from "@chakra-ui/react";

/* eslint-disable react/prop-types */
export function ChangeSalaryButtonGroup({ setSalaryInput, salaryInput }) {
  const rangeValues = [-5, -1, 1, 5];

  const handleSalaryChange = (value) => {
    const newSalary = Math.round(
      parseInt(salaryInput) + (parseInt(salaryInput) * value) / 100
    );
    setSalaryInput(newSalary);
  };

  return (
    <>
      <ButtonGroup>
        {rangeValues.map((value) => (
          <Button
            key={value}
            bgColor="#64748b"
            border="0px"
            borderRadius="0.5rem"
            padding="0.8rem"
            color="white"
            _hover={{ bgColor: "#4a5568" }}
            onClick={() => handleSalaryChange(value)}
          >
            {value > 0 ? `+${value}%` : `${value}%`}
          </Button>
        ))}
      </ButtonGroup>
    </>
  );
}
