import { useLocation } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavLink,
  NavbarToggle,
  NavbarCollapse,
  NavbarBrand,
} from "react-bootstrap";
import { RiQuestionFill } from "react-icons/ri";

export default function NavMain() {
  const location = useLocation();
  return (
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <NavbarBrand href="/">React-Bootstrap</NavbarBrand>
      <NavbarToggle aria-controls="responsive-navbar-nav" />
      <NavbarCollapse id="responsive-navbar-nav">
        <Nav className="ml-auto" activeKey={location.pathname}>
          <NavLink
            active={location.pathname === "/" ? true : false}
            eventKey={"home"}
            href="/"
          >
            Home
          </NavLink>
          <NavLink
            active={location.pathname === "/items" ? true : false}
            eventKey={"items"}
            href="/items"
          >
            Items
          </NavLink>
          <NavLink
            active={location.pathname === "/help" ? true : false}
            eventKey={"help"}
            href="/help"
          >
            <RiQuestionFill size={25} />
          </NavLink>
        </Nav>
      </NavbarCollapse>
    </Navbar>
  );
}
