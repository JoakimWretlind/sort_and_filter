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
