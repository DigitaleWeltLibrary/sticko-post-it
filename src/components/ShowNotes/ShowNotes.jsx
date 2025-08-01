import NoNotes from "../NoNotes/NoNotes";

export default function ShowNotes({ notes, changeOpen }) {
  return (
    <main className={false ? null : "nothing"}>
      {false ? null : <NoNotes changeOpen={changeOpen} />}
    </main>
  );
}
