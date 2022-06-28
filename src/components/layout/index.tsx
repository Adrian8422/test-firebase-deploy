import React from "react";
import { SearchForm } from "components/SearchForm";
import { useNavigate, Outlet } from "react-router-dom";
import css from "./layout.css";

function Layout() {
  const navigate = useNavigate();
  function handleRes(e) {
    navigate("/search/" + e), { replace: true };
  }
  return (
    <div>
      <header className={css.header}>
        <SearchForm
          onSearch={handleRes}
          type="text"
          placeholder="Buscar aqui"
        />
      </header>
      <Outlet />
    </div>
  );
}
export { Layout };
