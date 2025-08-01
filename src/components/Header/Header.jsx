import { faNoteSticky } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import "./Header.scss";

export default function Header({ changeOpen }) {
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
          <button onClick={() => changeOpen()}>
            <FontAwesomeIcon icon={faPlus} />
            <span>New Note</span>
          </button>
          <ThemeToggle />
        </div>
      </section>
    </header>
  );
}
