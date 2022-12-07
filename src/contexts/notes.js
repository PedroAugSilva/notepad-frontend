import { useEffect } from "react";
import { createContext, useState } from "react";
import useAuth from "../hooks/useAuth";
import api from "../services/api";

export const NoteContext = createContext({});

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const { user, isCadastred } = useAuth();
  

  useEffect(() => {
    const consult = async () => {
      if (isCadastred) {
        if (user[0] !== undefined) {
          const response = await api.get(`/notes/by/${user[0]._id}`);
          const note = response.data;
          setNotes(note.notes);
        }
      }
    };
    consult();
  }, [isCadastred, user]);

  const refresh = async () => {
    if (isCadastred) {
      if (user[0] !== undefined) {
        const response = await api.get(`/notes/by/${user[0]._id}`);
        const note = response.data;
        setNotes(note.notes);
      }
    }
  };

  const addNote = async () => {
    await api.post("/note", {
      title: "",
      content: "",
      fk_user_id: user[0]._id
    });
    refresh();
  };

  const editNote = async (id, title, content, fk_user_id) => {
    await api.put(`/note/${id}`, {
      id: id,
      title: title,
      content: content,
      fk_user_id: fk_user_id,
    });
    refresh();
  };
  const deleteNote = async (id) => {
    await api.delete(`/note/${id}`);
    refresh();
  };

  const selectNote = async (id) =>{
    const response = await api.get(`/note/${id}`);
    const note = response.data.notes;
    return note;
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, selectNote }}>
      {children}
    </NoteContext.Provider>
  );
};
