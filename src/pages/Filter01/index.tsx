import { useState } from "react";
import {
  H1,
  PageWrapper,
  Table,
  TD,
  TdHeaderFilter,
  Thead,
  TR,
} from "../../styles/commonStyles";
import { headers } from "../../utilities/headers";
import { Input } from "./style";
import { data } from "../../data/data.json";

const Filter01 = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <PageWrapper>
      <H1>filter people</H1>
      <form>
        <label>
          <Input
            type="text"
            placeholder="Search Person..."
            onChange={(e) => setSearch(e.target.value)}
          ></Input>
        </label>
      </form>

      <Table>
        <Thead>
          <tr>
            {headers.map((header) => {
              const { key, label } = header;
              return <TdHeaderFilter key={key}>{label}</TdHeaderFilter>;
            })}
          </tr>
        </Thead>
        <tbody>
          {data
            .filter((item) => {
              return search.toLowerCase() === ""
                ? item
                : item.first_name.toLowerCase().includes(search);
            })
            .map((person) => {
              const { id, first_name, last_name, email, gender, phone } =
                person;
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

export default Filter01;
