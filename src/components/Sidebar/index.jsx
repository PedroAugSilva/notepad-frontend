import React from "react";
import { SidebarStyle } from "./style";

import UserInfo from "../UserInfo";
import ListNotes from "../ListNotes";

const Sidebar = (props) => {
  const {
    notes,
    handleSelectNote,
    handleNewNote,
    TextArea
   } = props;
  return (
    <SidebarStyle>
      <ListNotes 
        notes={notes}
        handleSelectNote={handleSelectNote}
        handleNewNote={handleNewNote}
        TextArea={TextArea} />
      <UserInfo/>
    </SidebarStyle>
  );
};

export default Sidebar;
