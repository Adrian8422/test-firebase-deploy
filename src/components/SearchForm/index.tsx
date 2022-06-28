import React from "react";
import { Button } from "ui/buttons";
import { TextField } from "ui/text-field";
import css from "./searchForm.css";

type PropsLayout = {
  onSearch: (params: { search: string }) => any;
  type: string;
  placeholder: string;
};

function SearchForm(props: PropsLayout) {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("value in searchComp", e.target.search.value);
    props.onSearch(e.target.search.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={css.containerInput}>
        <TextField
          className={css.inputbutton}
          type="text"
          name="search"
          placeholder="Buscar aqui"
        />
        <Button>Buscar</Button>
      </div>
    </form>
  );
}

export { SearchForm };
