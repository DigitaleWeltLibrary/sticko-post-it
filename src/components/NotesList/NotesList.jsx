import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NotesList.scss";
import { faPalette, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";

export default function NotesList({ notes, delindex }) {
  return (
    <>
      {notes.map(({ text, color }, index) => (
        <div
          className="card"
          key={index}
          style={{ backgroundColor: `hsl(var(${color}))` }}
        >
          <div>
            <FontAwesomeIcon
              icon={faPen}
              style={{
                "--color": "#000",
              }}
            />
            <FontAwesomeIcon
              icon={faPalette}
              style={{
                "--color": "#000",
              }}
            />
            <FontAwesomeIcon
              icon={faTrash}
              style={{
                "--color": "#ff1e00",
              }}
              onClick={() => delindex(index)}
            />
          </div>
          <p>{text}</p>
        </div>
      ))}
    </>
  );
}
