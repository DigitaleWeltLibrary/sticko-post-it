import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NoNotes.scss";

export default function NoNotes({ changeOpen }) {
  return (
    <article className="nonotes">
      <div onClick={() => changeOpen()}>
        <FontAwesomeIcon size="3x" icon={faPlus} />
      </div>
      <h2>Welcome to Sticko!</h2>
      <p>
        Create your notes by clicking the "New Note" button at the top. Every
        note needs content; empty notes are automatically deleted. To edit a
        note, simply click the icons in the top right corner.
      </p>

      <button onClick={() => changeOpen()}>
        <FontAwesomeIcon size="xl" icon={faPlus} />
        <span>Create First Note</span>
      </button>
    </article>
  );
}
