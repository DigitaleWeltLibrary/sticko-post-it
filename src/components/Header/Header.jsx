import { faNoteSticky } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Header() {
  /* NOTE state to manage theme */
  const [theme, settheme] = useState(
    () => localStorage.getItem("sticko-theme") || "light"
  );
  /* NOTE function for changing the theme */
  const newtheme = (theme) => settheme(theme === "light" ? "dark" : "light");

  return (
    <header>
      <FontAwesomeIcon icon={faNoteSticky} />
      <h1>Sticko</h1>

      <button>
        <FontAwesomeIcon icon={faPlus} />
        <span>New Note</span>
      </button>
      <ThemeToggle newtheme={newtheme} theme={theme} />
    </header>
  );
}
