import { Route, Routes } from "react-router-dom";
import React from "react";
import { Home } from "pages/home/Home";
import { SearchPage } from "pages/search-page/SearchPage";
import { Layout } from "components/layout";
import { GetItem } from "pages/item-page/ItemPage";
function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/search/:query" element={<SearchPage />} />
        <Route path="/item/:id" element={<GetItem />} />
      </Route>
    </Routes>
  );
}
export { AppRoutes };
