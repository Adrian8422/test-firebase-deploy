import React from "react";
import css from "./button.css";

function Button(props) {
  return <button className={css.button}>{props.children}</button>;
}
export { Button };
