import { ButtonStyle, Delete } from "./style";
import { AiOutlineFileText } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";
import Warning from "../Warning";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";



const ButtonSelectNotes = ({ Text, id, handleSelectNote, TextArea }) => {
  const [triggerWarning, setTriggerWarning] = useState(false);
  const handleDeleteNote = () => {
    setTriggerWarning(true);
  };
  return (
    <>
      <ButtonStyle>
        <div onClick={() => handleSelectNote(id)}>
          <AiOutlineFileText />
          {Text ? Text : 'Untitled'}
        </div>
        <Delete onClick={handleDeleteNote}>
          <FaTrashAlt />
        </Delete>
      </ButtonStyle>
      <AnimatePresence>
        {triggerWarning && (
          <Warning
            Title={Text}
            setTriggerWarning={setTriggerWarning}
            id={id}
            TextArea={TextArea}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ButtonSelectNotes;
