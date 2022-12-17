import styled from "styled-components";

export const PageWrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 3rem;
  @media (min-width: 768px) {
    padding: 9rem 3rem 5rem 3rem;
  }
`;

export const H1 = styled.h1`
  text-transform: capitalize;
  font-size: clamp(3rem, 4vw, 4rem);
  font-weight: 300;
  color: ${(props) => props.theme.black};
  margin-bottom: 1rem;
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
  font-weight: 600;
`;

export const TdHeaderFilter = styled.td`
  padding: 1.2rem 0rem 0.9rem 0.9rem;
  white-space: nowrap;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const TD = styled.td`
  padding: 0.6rem 0.3rem 0.6rem 0.6rem;
  white-space: nowrap;
  font-size: 1.2rem;
  font-weight: 500;
`;
