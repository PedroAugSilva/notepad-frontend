import {
  NavbarStyle,
  NavbarItemInput,
  ItemLabel,
  NavbarIndicator,
} from "./style";


import { CgNotes } from "react-icons/cg";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdNotes } from "react-icons/md";


const Navbar = ({  handleNavbarItens }) => {

  return (
    <NavbarStyle>
      <ItemLabel htmlFor="editNote">
        <MdNotes style={{ pointerEvents: "none" }} />
      </ItemLabel>
      <NavbarItemInput
        name="radio"
        type="radio"
        id="editNote"
        onChange={(e) => handleNavbarItens(e)}
      />
      <ItemLabel htmlFor="notes">
        <CgNotes style={{ pointerEvents: "none" }} />
      </ItemLabel>
      <NavbarItemInput
        name="radio"
        type="radio"
        id="notes"
        onChange={(e) => handleNavbarItens(e)}
      />
     
      <ItemLabel htmlFor="opitions">
        <BiDotsVerticalRounded style={{ pointerEvents: "none" }} />
      </ItemLabel>
      <NavbarItemInput
        name="radio"
        type="radio"
        id="opitions"
        onChange={(e) => handleNavbarItens(e)}
      />
      <NavbarIndicator />
    </NavbarStyle>
  );
};

export default Navbar;
