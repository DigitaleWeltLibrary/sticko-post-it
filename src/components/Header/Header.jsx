import { faNoteSticky } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Header.scss";

export default function Header() {
  /* NOTE state to manage theme */
  const [theme, settheme] = useState(
    () => localStorage.getItem("sticko-theme") || "light"
  );
  /* NOTE function for changing the theme */
  const newtheme = (theme) => settheme(theme === "light" ? "dark" : "light");

  return (
    <header>
      <section>
        <div>
          <FontAwesomeIcon
            icon={faNoteSticky}
            size="xl"
            className="note"
            color="hsl(330 100% 88%)"
          />
          <h1>Sticko</h1>
        </div>

        <div>
          <button>
            <FontAwesomeIcon icon={faPlus} />
            <span>New Note</span>
          </button>
          <ThemeToggle newtheme={newtheme} theme={theme} />
        </div>
      </section>
    </header>
  );
}
