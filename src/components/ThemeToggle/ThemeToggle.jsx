import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  /* NOTE state to manage theme */
  const [theme, settheme] = useState(
    () => localStorage.getItem("sticko-theme") || "light"
  );
  /* NOTE function for changing the theme */
  const newtheme = (theme) => settheme(theme === "light" ? "dark" : "light");

  /* NOTE change theme in localStorage */
  useEffect(() => {
    localStorage.setItem("sticko-theme", theme);

    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  return (
    <FontAwesomeIcon
      icon={theme == "dark" ? faMoon : faSun}
      size="xl"
      onClick={() => newtheme(theme)}
      className="toggle"
    />
  );
}
