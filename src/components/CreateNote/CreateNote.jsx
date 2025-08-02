import { useEffect, useRef, useState } from "react";
import "./CreateNote.scss";
import colors from "../../utils/colors";

export default function CreateNote({
  changeOpen,
  notes,
  setnewnotes,
  editID,
  setEditID,
}) {
  /* NOTE state for the note */
  const [note, setNote] = useState(
    notes[editID] || {
      text: "",
      color: "--note-yellow",
    }
  );

  /* NOTE create a useref for input */
  const userinputRef = useRef(null);

  /* NOTE focus on input at the beginning */
  useEffect(() => {
    if (userinputRef.current) {
      userinputRef.current.focus();
    }
  }, []);

  /* NOTE Add Note  */
  const addNoteToArray = () => {
    let newnotes = [...notes];
    newnotes.push(note);
    setnewnotes(newnotes);
    changeOpen();
  };

  /* NOTE edit Note */
  const editnote = () => {
    let newnotes = [...notes];
    newnotes[editID] = note;
    setnewnotes(newnotes);
    changeOpen();
    setEditID(null);
  };

  return (
    <article>
      <article className="createnote">
        <h2>{editID != null ? "Edit your Note" : "Create New Note"}</h2>
        <p>Write your thoughts and choose a color for your new sticky note.</p>
        <textarea
          placeholder="Type your note here"
          maxLength={200}
          value={note.text}
          onChange={(e) =>
            setNote((prev) => ({ ...prev, text: e.target.value }))
          }
          ref={userinputRef}
        />
        <p className="length">{note.text.length}/200 characters</p>
        <h2>Color</h2>
        <section>
          {colors.map((color) => (
            <div
              className={`color ${note.color === color ? "active" : ""}`}
              key={color}
              style={{
                backgroundColor: `hsl(var(${color}))`,
                border: `4px solid hsl(var(${color}-foreground))`,
              }}
              onClick={() => setNote((prev) => ({ ...prev, color }))}
            ></div>
          ))}
        </section>
        <h2>Preview</h2>
        <div
          className="note"
          style={{ backgroundColor: `hsl(var(${note.color}))` }}
        >
          {note.text || "Your note content will appear here..."}
        </div>

        <div className="btn">
          <button onClick={() => changeOpen()}>Cancel</button>
          <button
            disabled={!note.text}
            onClick={editID != null ? editnote : addNoteToArray}
          >
            {editID != null ? "Edit" : "Create Note"}
          </button>
        </div>
      </article>
    </article>
  );
}
