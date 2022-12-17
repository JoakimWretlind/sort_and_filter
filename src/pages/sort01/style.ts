import styled from "styled-components";

export const OrederIcons = styled.button`
  display: block;
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 1.8rem;
  padding-left: 0.3rem;
  padding-top: 0.6rem;
  transition: 0.25s ease;
  color: ${(props) => props.theme.black};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.pink};
  }
  &.sort-reverse {
    transform: rotate(180deg);
  }
`;

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: min-content;
`;

export const Table = styled.table`
  height: 100%;
  width: 100%;
  max-width: 80rem;
  background-color: ${(props) => props.theme.gray};
`;

export const Thead = styled.thead`
  font-weight: 900;
  font-size: 1.6rem;
`;

export const TR = styled.tr`
  background-color: ${(props) => props.theme.lightGray};
  &:nth-child(odd) {
    background-color: ${(props) => props.theme.white};
  }
`;

export const TdHeader = styled.td`
  padding: 0.3rem 0.3rem 0rem 0.6rem;
  white-space: nowrap;
  font-size: 1.2rem;
  font-weight: 500;
`;

export const TD = styled.td`
  padding: 0.6rem 0.3rem 0.6rem 0.6rem;
  white-space: nowrap;
  font-size: 1.2rem;
  font-weight: 500;
`;
