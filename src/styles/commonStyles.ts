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

{/* <OrederIcons onClick={() => setSorted(!sorted)}>
                      {sorted ? <FaCaretUp /> : <FaCaretDown />}
                    </OrederIcons> */}
