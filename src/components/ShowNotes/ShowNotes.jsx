import NoNotes from "../NoNotes/NoNotes";
import NotesList from "../NotesList/NotesList";

export default function ShowNotes({ notes, changeOpen }) {
  const length = notes.length;

  return (
    <main className={length == 0 ? "nothing" : null}>
      {length == 0 ? (
        <NoNotes changeOpen={changeOpen} />
      ) : (
        <NotesList notes={notes} />
      )}
    </main>
  );
}
