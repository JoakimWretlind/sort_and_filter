import { OrederIcons, Row } from "./style";
import {
  H1,
  PageWrapper,
  Table,
  TD,
  Thead,
  TR,
  TdHeader,
} from "../../styles/commonStyles";
import { data } from "../../data/data.json";
import { FaCaretDown } from "react-icons/fa";
import { MouseEventHandler, useCallback, useState } from "react";
import { headers } from "../../utilities/headers";

// create type for the data that we recieve
type Data = typeof data;

// Keep track of which sortKey is being used
// [0]=id, [1]=first_name and so on
type SortKeys = keyof Data[0];

// SortOrder will be ascending or descending
type SortOrder = "ascn" | "desc";

//create types for each person
/*
type person = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
};
*/

function sortData({
  tableData,
  sortKey,
  reverse,
}: {
  tableData: Data;
  sortKey: SortKeys;
  reverse: boolean;
}) {
  if (!sortKey) return tableData;

  const sortedData = data.sort((a, b) => {
    // we use sortKey (instead of for example "id"), since we
    //want to be able to sort from different keys (id, name etc)
    return a[sortKey] > b[sortKey] ? 1 : -1;
  });
  // if we click reverse, use the reverse method from js
  if (reverse) {
    return sortedData.reverse();
  }
  return sortedData;
}

// pass in the data
const Sort01: React.FC<{ data: Data }> = () => {
  // statehandling
  // sortKey = reffers to the key in headers -> use the SortKeys type
  const [sortKey, setSortKey] = useState<SortKeys>("id");
  // sortOrder = reffers to the ascn or desc in SortOrder -> use the SortOrder type
  const [sortOrder, setSortOrder] = useState<SortOrder>("ascn");

  // The headers for the table
  // to make this work, we have to give a type to the key and the label
  /*
  const headers: { key: SortKeys; label: string }[] = [
    { key: "id", label: "ID" },
    { key: "first_name", label: "First name" },
    { key: "last_name", label: "Last name" },
    { key: "email", label: "Email" },
    { key: "gender", label: "Gender" },
    { key: "phone", label: "Phone" },
  ];
  */

  // The sort-function
  // useCallback => If wa pass in the same properties we want memoize
  // and therefore quickly return the result of our sorting function
  const sortedData = useCallback(
    () => sortData({ tableData: data, sortKey, reverse: sortOrder === "desc" }),
    [data, sortKey, sortOrder]
  );

  function changeSort(key: SortKeys) {
    setSortOrder(sortOrder === "ascn" ? "desc" : "ascn");
    // which key is pressed for the correct
    setSortKey(key);
  }

  // Button to sort the Data
  function SortButton({
    sortOrder,
    columnKey,
    sortKey,
    onClick,
  }: {
    sortOrder: SortOrder;
    columnKey: SortKeys;
    sortKey: SortKeys;
    onClick: MouseEventHandler<HTMLButtonElement>;
  }) {
    return (
      <OrederIcons
        onClick={onClick}
        className={`${
          sortKey === columnKey && sortOrder === "desc"
            ? "sort-button sort-reverse"
            : "sort-button"
        }`}
      >
        <FaCaretDown />
      </OrederIcons>
    );
  }

  return (
    <PageWrapper>
      <H1>sort people</H1>
      <Table>
        <Thead>
          <tr>
            {headers.map((header) => {
              const { key, label } = header;
              return (
                <TdHeader key={key}>
                  <Row>
                    {label}
                    <SortButton
                      columnKey={key}
                      onClick={() => changeSort(key)}
                      {...{
                        sortOrder,
                        sortKey,
                      }}
                    />
                  </Row>
                </TdHeader>
              );
            })}
          </tr>
        </Thead>

        <tbody>
          {/** the useCallback will return a function, so we can use
           * our sortedData here
           */}
          {sortedData().map((person) => {
            const { id, first_name, last_name, email, gender, phone } = person;
            return (
              <TR key={id}>
                <TD>{id}</TD>
                <TD>{first_name}</TD>
                <TD>{last_name}</TD>
                <TD>{email}</TD>
                <TD>{gender}</TD>
                <TD>{phone}</TD>
              </TR>
            );
          })}
        </tbody>
      </Table>
    </PageWrapper>
  );
};

export default Sort01;

// Make ascn or desc as booleans
