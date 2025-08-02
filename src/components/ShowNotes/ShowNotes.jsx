import NoNotes from "../NoNotes/NoNotes";
import NotesList from "../NotesList/NotesList";

export default function ShowNotes({
  notes,
  changeOpen,
  setnewnotes,
  setEditID,
}) {
  /* NOTE amount of notes */
  const length = notes.length;

  return (
    <main className={length == 0 ? "nothing" : null}>
      {length == 0 ? (
        <NoNotes changeOpen={changeOpen} />
      ) : (
        <NotesList
          notes={notes}
          setnewnotes={setnewnotes}
          setEditID={setEditID}
        />
      )}
    </main>
  );
}
