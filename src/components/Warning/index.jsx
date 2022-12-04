import React from "react";
import { Container } from "./style";


import useNote from "../../hooks/useNote";

const Warning = ({ Title, setTriggerWarning, id, TextArea }) => {
  const { deleteNote } = useNote();

  const handleCancel = () => {
    setTriggerWarning(false);
  };
  const handleConfirm = async () => {
    await deleteNote(id);
    setTriggerWarning(false);
    TextArea(false)
  };

  return (
    <Container
      layout
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 55, opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="alert">
        <label className="Content">Delete "{Title}"?</label>
        <div className="Buttons">
          <button className="confirm" onClick={handleConfirm}>
            Confirm
          </button>
          <button className="cancel" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Warning;
