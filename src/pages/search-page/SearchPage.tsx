import { useSearch } from "hooks/hooks";
import React from "react";
import { Link } from "react-router-dom";
import css from "./searchPage.css";
function SearchPage() {
  const results = useSearch();
  // console.log("Results", results);
  return (
    <div className={css.containerItems}>
      {results
        ? results.map((r) => (
            <ul className={css.item}>
              <img src={r.thumbnail} alt="" />
              <div>
                <h3>{r.title}</h3>
                <h2>{r.price}</h2>
              </div>
              <Link to={"/item/" + r.id}>Vermas</Link>
            </ul>
          ))
        : null}
    </div>
  );
}
export { SearchPage };
