import { useState } from "react";
import "./CreateNote.scss";

export default function CreateNote({ changeOpen, addnote }) {
  /* NOTE state for the note */
  const [note, setNote] = useState({
    text: "",
    color: "--note-yellow",
  });

  /* NOTE css var for the note colors */
  const colors = [
    "--note-yellow",
    "--note-pink",
    "--note-blue",
    "--note-green",
    "--note-orange",
  ];

  /* NOTE add note to array and close create note */
  const addnotearr = () => {
    addnote(note);
    changeOpen();
  };

  return (
    <article className="createnote">
      <h2>Create New Note</h2>
      <p>Write your thoughts and choose a color for your new sticky note.</p>
      <textarea
        placeholder="Type your note here"
        maxLength={200}
        value={note.text}
        onChange={(e) => setNote((prev) => ({ ...prev, text: e.target.value }))}
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
        <button disabled={!note.text} onClick={addnotearr}>
          Create Note
        </button>
      </div>
    </article>
  );
}
