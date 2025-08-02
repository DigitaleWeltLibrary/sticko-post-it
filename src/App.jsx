import { useEffect, useState } from "react";
import CreateNote from "./components/CreateNote/CreateNote";
import Header from "./components/Header/Header";
import "./main.scss";
import ShowNotes from "./components/ShowNotes/ShowNotes";

function App() {
  /* NOTE state to open create new note */
  const [open, setOpen] = useState(false);
  /* NOTE change visibility of open create */
  const changeOpen = () => {
    setOpen((prev) => !prev);
  };

  /* NOTE State to manage notes */
  const [notes, setNotes] = useState([]);

  /* NOTE Add Note  */
  const addnote = (obj) => {
    let newnotes = [...notes];
    newnotes.push(obj);
    setNotes(newnotes);
  };

  /* NOTE set new notes array */
  const setnewnotes = (notesarr) => setNotes(notesarr);

  /* FIXME del */
  useEffect(() => {
    console.log(notes);
  }, [notes]);

  return (
    <>
      <Header changeOpen={changeOpen} />
      {open ? <CreateNote changeOpen={changeOpen} addnote={addnote} /> : null}
      <ShowNotes
        notes={notes}
        changeOpen={changeOpen}
        setnewnotes={setnewnotes}
      />
    </>
  );
}

export default App;
