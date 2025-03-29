import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./Main.tsx";
import Counter from "./counter/Counter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <main className="h-full bg-neutral-900 text-neutral-200">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/counter" element={<Counter />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  </StrictMode>
);
