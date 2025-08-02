import { faPalette, faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import colors from "../../utils/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function CardSettings({
  delindex,
  changeColor,
  noteIndex,
  color,
  isHovered,
}) {
  const [showcolors, changeShowColors] = useState(false);

  /* NOTE  Hide color palette on no more hover*/
  useEffect(() => {
    if (!isHovered) {
      changeShowColors(false);
    }
  }, [isHovered]);

  return (
    <article>
      <FontAwesomeIcon
        icon={faPen}
        style={{
          "--color": "#000",
        }}
      />
      <FontAwesomeIcon
        icon={faPalette}
        style={{
          "--color": "#000",
        }}
        onClick={() => changeShowColors((prev) => !prev)}
      />
      <FontAwesomeIcon
        icon={faTrash}
        style={{
          "--color": "#ff1e00",
        }}
        onClick={() => delindex(noteIndex)}
      />

      {showcolors ? (
        <section key={`btns-${noteIndex}`}>
          {colors.map((colorarr, colorindex) => (
            <div
              key={colorindex}
              style={{
                backgroundColor: `hsl(var(${colorarr}))`,
                border: `4px solid hsl(var(${colorarr}-foreground))`,
              }}
              className={color == colorarr ? "active" : null}
              onClick={() => {
                changeColor(noteIndex, colorarr);
                changeShowColors(false);
              }}
            ></div>
          ))}
        </section>
      ) : null}
    </article>
  );
}
