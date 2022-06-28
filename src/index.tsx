import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { AppRoutes } from "router";

const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(
  <RecoilRoot>
    <Suspense fallback={"loading..."}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Suspense>
  </RecoilRoot>
);
