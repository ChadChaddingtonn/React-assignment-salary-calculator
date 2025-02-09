export const familyMembers = [
  {
    id: "1",
    name: "Kristóf",
    salary: 50000,
    taxed: 50000,
    perks: { szja: true, hazas: false, szemelyi: false, csaladi: false },
    family: [0, 0],
  },
  {
    id: "2",
    name: "Norbert",
    salary: 1245000,
    taxed: 837925,
    perks: { szja: false, hazas: false, szemelyi: false, csaladi: true },
    family: [2, 1],
  },
];

export function deleteMember(memberId) {
  const index = familyMembers.findIndex((member) => member.id === memberId);
  familyMembers.splice(index, 1);
  return familyMembers[0];
}

export function saveMember(member) {
  const index = familyMembers.findIndex((m) => m.id === member.id);
  if (index !== -1) {
    familyMembers[index] = member;
    return;
  }

  familyMembers.push(member);
}
