import { List, ListItem, SidebarTitle, Button } from "./style";
import ButtonSelectNotes from "../ButtonSelectNotes";
import { GrAdd } from "react-icons/gr";


import useNote from "../../hooks/useNote";

const ListNotes = ({ handleSelectNote, handleNewNote, TextArea }) => {
  const { notes } = useNote();

  return (
    <List>
      <SidebarTitle>Notes</SidebarTitle>
      {notes.map((item) => {
        const { _id, title } = item;
        return (
          <ListItem key={_id}>
            <ButtonSelectNotes
              Text={title}
              id={_id}
              handleSelectNote={handleSelectNote}
              TextArea={TextArea}
            />
          </ListItem>
        );
      })}
      <Button onClick={handleNewNote}>
        <GrAdd />
        <span>Add Note </span>
      </Button>
    </List>
  );
};

export default ListNotes;
