import { useContext } from "react";
import { NoteContext } from "../contexts/notes";

const useNote = () => {
    const context = useContext(NoteContext)
    return context
}

export default useNote;