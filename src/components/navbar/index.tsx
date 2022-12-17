import { useState } from "react";
import { Nav, NavIcons, NavLinks, NavUL, P } from "./style";
import { navData } from "./navdata";
import { FaBars, FaTimes } from "react-icons/fa";

type Links = {
  id: number;
  title: string;
  path: string;
};

export const Navbar: React.FC<{}> = () => {
  const [navbar, setNavbar] = useState(false);

  return (
    <>
      <NavIcons onClick={() => setNavbar(!navbar)}>
        {navbar ? <FaTimes /> : <FaBars />}
      </NavIcons>

      <Nav navbar={navbar}>
        <NavUL>
          {navData.map((link: Links) => {
            const { id, title, path } = link;
            return (
              <NavLinks key={id} to={path} onClick={() => setNavbar(!navbar)}>
                <P>{title}</P>
              </NavLinks>
            );
          })}
        </NavUL>
      </Nav>
    </>
  );
};
