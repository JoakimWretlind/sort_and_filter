type SortKeys = any;

// The headers for the table
// to make this work, we have to give a type to the key and the label
export const headers: { key: SortKeys; label: string }[] = [
  { key: "id", label: "ID" },
  { key: "first_name", label: "First name" },
  { key: "last_name", label: "Last name" },
  { key: "email", label: "Email" },
  { key: "gender", label: "Gender" },
  { key: "phone", label: "Phone" },
];
