import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import Main from "./Main.tsx";
import CounterMain from "./counter/Main";
import RandomCPUMain from "./randomcpu/Main";
import CPUCounterMain from "./newcpucounter/Main";
import "/src/styles/base.css";
import "/src/styles/app.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HashRouter basename="">
      <main className="h-full bg-neutral-900 text-neutral-200">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/counter" element={<CounterMain />}></Route>
          <Route path="/randomcpu" element={<RandomCPUMain />}></Route>
          <Route path="/cpucounter" element={<CPUCounterMain />}></Route>
        </Routes>
      </main>
    </HashRouter>
  </StrictMode>
);
