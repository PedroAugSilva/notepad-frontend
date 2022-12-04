import { useState } from "react";
import { useNavigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import useNote from "../../hooks/useNote";
import { MdDoNotDisturb } from "react-icons/md";
import { AiOutlineSave } from "react-icons/ai";

import { Main, TextEditor, AlertTextarea, Mask, TextArea, Input, ButtonSave } from "./style";


import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";
import ListNotes from "../../components/ListNotes";

import { AnimatePresence } from "framer-motion";

const Home = ({ children }) => {
  const { user } = useAuth();
  const { addNote, selectNote, editNote } = useNote();

  const navigate = useNavigate();

  const [triggerTextarea, setTriggerTextarea] = useState(false);
  const [ isMask, setMask ] = useState(false);

  const [triggerNotes, setTriggerNotes] = useState(false);

  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [idNote, setIdNote] = useState();

  const handleNewNote = async () => {
    

    await addNote();

  };

  const handleSave = async () => {
    await editNote(idNote, title, content, user[0]._id);
  };

  const handleSelectNote = async (id) => {
    setTriggerTextarea(true);
    const res = await selectNote(id);
    setTitle(res.title);
    setContent(res.content);
    setIdNote( Number(id) );
  };

  const handleNavbarItens = (e) => {
    const input = e.target;
    if (input.checked) {
      if (input.id === "notes") {
        setMask(false)
        setTriggerNotes(true);
      } else if (input.id === "opitions") {
        navigate("/home/settings");
        setTriggerNotes(false);
        setMask(true)
      } else if (input.id === "editNote") {
        setTriggerNotes(false);
        setMask(true)
      } else if (input.id === "user") {
        setTriggerNotes(false);
      }
    }
  };

  return (
    <Main>
      <AnimatePresence>{children}</AnimatePresence>

    {isMask && <Mask onClick={() => setMask(false)}/> }
      <Navbar handleNavbarItens={handleNavbarItens} />

      {triggerNotes && (
        <ListNotes
          handleNewNote={handleNewNote}
          handleSelectNote={handleSelectNote}
        />
      )}

      <Sidebar
        handleNewNote={handleNewNote}
        handleSelectNote={handleSelectNote}
        TextArea={setTriggerTextarea}
      />
      <TextEditor>
        {!triggerTextarea && (
          <AlertTextarea>
            <MdDoNotDisturb fontSize={150} style={{ color: "#b5b5b5" }} />
            <label>No notes selected</label>
          </AlertTextarea>
        )}
        {triggerTextarea && (
          <>
            <Input
              name="Title"
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              value={title}
            />
            <TextArea
              onChange={(e) => {
                setContent(e.target.value);
              }}
              value={content}
              placeholder='Type here...'
              name="Content"
            />
            
            
            <ButtonSave onClick={handleSave}><AiOutlineSave /></ButtonSave>
          </>
        )}
      </TextEditor>
    </Main>
  );
};

export default Home;
