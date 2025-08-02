import { useEffect, useState } from "react";
import CreateNote from "./components/CreateNote/CreateNote";
import Header from "./components/Header/Header";
import "./main.scss";
import "./fonts.scss";
import ShowNotes from "./components/ShowNotes/ShowNotes";

function App() {
  /* NOTE state to open create new note */
  const [open, setOpen] = useState(false);
  /* NOTE change visibility of open create */
  const changeOpen = () => {
    setOpen((prev) => !prev);
  };

  /* NOTE State to manage notes */
  const [notes, setNotes] = useState(
    () => JSON.parse(localStorage.getItem("sticko-notes")) || []
  );

  /* NOTE Save notes to localStorage */
  useEffect(() => {
    const notesJSON = JSON.stringify(notes);
    localStorage.setItem("sticko-notes", notesJSON);
  }, [notes]);

  /* NOTE set new notes array */
  const setnewnotes = (notesarr) => setNotes(notesarr);

  /* NOTE get index of note that you want to edit */
  const [editID, setEditID] = useState(null);

  /* NOTE useeffect for opening dialog to edit notes */
  useEffect(() => {
    if (editID !== null) {
      setOpen(true);
    }
  }, [editID]);

  return (
    <>
      <Header changeOpen={changeOpen} />
      {open ? (
        <CreateNote
          changeOpen={changeOpen}
          notes={notes}
          setnewnotes={setnewnotes}
          editID={editID}
          setEditID={setEditID}
        />
      ) : null}
      <ShowNotes
        notes={notes}
        changeOpen={changeOpen}
        setnewnotes={setnewnotes}
        setEditID={setEditID}
      />
    </>
  );
}

export default App;
