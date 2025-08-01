import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

export default function ThemeToggle({ newtheme, theme }) {
  /* NOTE change theme in localStorage */
  useEffect(() => {
    localStorage.setItem("sticko-theme", theme);
  }, [theme]);

  return (
    <FontAwesomeIcon
      icon={theme == "dark" ? faMoon : faSun}
      size="xl"
      onClick={() => newtheme(theme)}
    />
  );
}
