import { Link } from "react-router-dom";
import { CHARACTERS } from "../global/characters";
import { Capitalize } from "../utils/string";
import React from "react";
import { initRecords } from "./Records";

export default function Main() {
  const [records, setRecords] = React.useState(() => {
    let rec = initRecords();

    console.log(rec);

    return rec;
  });

  return (
    <div className="p-4 bg-neutral-900 flex flex-col items-center">
      <header className={`flex flex-col gap-4 items-center mb-4`}>
        <Link to="/">
          <h1
            className={`text-2xl px-2 hover:bg-neutral-200 hover:text-neutral-900
              rounded-md transition ease-in delay-100`}
          >
            BackToBack
          </h1>
        </Link>

        {/* Load all characters from constant */}
        <div className="flex gap-4 justify-center items-center">
          <select
            name="me"
            id="me"
            className={`px-1 border border-neutral-500 w-16 text-center
              text-xl text-neutral-200 bg-neutral-950 rounded-md`}
          >
            {CHARACTERS.map((char) => {
              return (
                <option key={char.id} value={char.id}>
                  {Capitalize(char.name)}
                </option>
              );
            })}
          </select>

          <select
            name="cpu"
            id="cpu"
            className={`px-1 border border-neutral-500 w-16 text-center
              text-xl text-neutral-200 bg-neutral-950 rounded-md`}
          >
            {CHARACTERS.map((char) => {
              return (
                <option key={char.id} value={char.id}>
                  {Capitalize(char.name)}
                </option>
              );
            })}
          </select>
        </div>
      </header>

      <div>show Records</div>
      <div>Counter CPU Records</div>
    </div>
  );
}
