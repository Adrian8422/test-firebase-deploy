import React from "react";
import css from "./textfield.css";
type PropsTextField = {
  placeholder: string;
  type: string;
  name: string;
  className: string;
};
function TextField(props: PropsTextField) {
  return (
    <label>
      <input
        className={css.inputbutton}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
      />
    </label>
  );
}

export { TextField };
