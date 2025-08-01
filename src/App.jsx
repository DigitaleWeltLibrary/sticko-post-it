import { useEffect, useState } from "react";
import CreateNote from "./components/CreateNote/CreateNote";
import Header from "./components/Header/Header";
import "./main.scss";

function App() {
  /* FIXME state to open create new note */
  const [open, setOpen] = useState(true);
  /* NOTE change visibility of open create */
  const changeOpen = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    console.log(open);
  }, [open]);

  return (
    <>
      <Header changeOpen={changeOpen} />
      {open ? <CreateNote /> : null}
    </>
  );
}

export default App;
