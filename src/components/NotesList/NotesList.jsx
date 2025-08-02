import "./NotesList.scss";
import CardSettings from "../CardSettings/CardSettings";
import { useState } from "react";

export default function NotesList({ notes, setnewnotes }) {
  /* NOTE del index */
  const delindex = (index) => {
    let newnotes = [...notes];
    newnotes.splice(index, 1);
    setnewnotes(newnotes);
  };

  /* NOTE change color of the note */
  const changeColor = (noteIndex, newColor) => {
    const updatedNotes = notes.map((note, i) =>
      i === noteIndex ? { ...note, color: newColor } : note
    );

    setnewnotes(updatedNotes);
  };

  const [hoveredNoteIndex, setHoveredNoteIndex] = useState(null);

  return (
    <>
      {notes.map(({ text, color }, noteIndex) => (
        <div
          className="card"
          key={`cards-${noteIndex}`}
          style={{ backgroundColor: `hsl(var(${color}))` }}
          onMouseEnter={() => setHoveredNoteIndex(noteIndex)}
          onMouseLeave={() => setHoveredNoteIndex(null)}
        >
          <CardSettings
            delindex={delindex}
            changeColor={changeColor}
            noteIndex={noteIndex}
            color={color}
            isHovered={hoveredNoteIndex === noteIndex}
          />
          <p key={`text-${noteIndex}`}>{text}</p>
        </div>
      ))}
    </>
  );
}
