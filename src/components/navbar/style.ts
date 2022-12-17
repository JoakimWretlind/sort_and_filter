import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavIcons = styled.div`
  position: absolute;
  display: block;
  top: 3rem;
  left: 3rem;
  font-size: 1.8rem;
  z-index: 99;
  color: ${(props) => props.theme.pink};
  transition: 0.25s ease;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.gray};
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

type Nav = {
  navbar: boolean;
};

export const Nav = styled.nav<Nav>`
  position: fixed;
  top: ${({ navbar }) => (navbar ? "0" : "-100vh")};
  left: 0%;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.black};
  z-index: 98;
  transition: 0.3s ease;
  @media (min-width: 768px) {
    top: 0;
    height: 6rem;
    width: 100%;
  }
`;

export const NavUL = styled.ul`
  height: clamp(25rem, 40%, 60vh);
  width: 100%;
  padding: 3rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 768px) {
    height: 100%;
    width: 100%;
    max-width: 36rem;
    padding: 0 3rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const P = styled.p`
  color: ${(props) => props.theme.white};
  font-size: 1.4rem;
  letter-spacing: 0.1rem;
  text-transform: capitalize;
  transition: 0.25s ease;
`;

export const NavLinks = styled(NavLink)`
  padding: 0.5rem;
  &:hover ${P} {
    color: ${(props) => props.theme.gray};
  }
  &.active ${P} {
    color: hsl(330, 100%, 71%);
  }
`;
