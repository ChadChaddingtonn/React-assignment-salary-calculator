import { Table } from "semantic-ui-react";
import { familyMembers } from "../../FamilyMemberData/data";

/* eslint-disable react/prop-types */
export function HouseHoldSummaryTable({ setSelectedMember, selectedMember }) {
  let sum = 0;
  return (
    <>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Családtag</Table.HeaderCell>
            <Table.HeaderCell>Nettó bér</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {familyMembers.map(
            (member) => (
              (sum += member.taxed),
              (
                <Table.Row
                  key={member.id}
                  active={
                    selectedMember ? selectedMember.id === member.id : false
                  }
                >
                  <Table.Cell
                    onClick={() => setSelectedMember(member)}
                    className="selectableTableCell"
                  >
                    {member.name}
                  </Table.Cell>
                  <Table.Cell>{`${member.taxed.toLocaleString(
                    "de-DE"
                  )} Ft`}</Table.Cell>
                </Table.Row>
              )
            )
          )}
          <Table.Row>
            <Table.Cell>Összesen</Table.Cell>
            <Table.Cell>{`${sum.toLocaleString("de-DE")} Ft`}</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </>
  );
}
