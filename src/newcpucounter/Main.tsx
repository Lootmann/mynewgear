import { Link } from "react-router-dom";
import { CHARACTERS } from "../global/characters";
import { Capitalize } from "../utils/string";
import React from "react";
import { LevelType, RecordType } from "./Records";
import { loadStorage } from "./Storage";
import { ShowRecords } from "./ShowRecords";
import { CPUCounter } from "./CPUCounter";

export default function Main() {
  const STORAGE_ID = "new-cpu-counter-storage";
  const [myCharId, SetMyChar] = React.useState<number | undefined>(1);
  const [vsCharId, SetVsChar] = React.useState<number | undefined>(1);
  const [selectedRecord, SetSelectedRecord] = React.useState<LevelType>();

  const [records, setRecords] = React.useState<RecordType[]>(() => {
    return loadStorage(STORAGE_ID);
  });

  function PlusCounter(
    myCharId: number,
    cpuCharId: number,
    player: "me" | "cpu",
    level: "lv5" | "lv6" | "lv7" | "lv8"
  ) {
    setRecords(
      records.map((record) => {
        const myCharName = CHARACTERS.find((char) => char.id == myCharId)?.name;
        if (!myCharName) return record;

        // find vschar name
        const cpuCharname = CHARACTERS.find(
          (char) => char.id == cpuCharId
        )?.name;
        if (!cpuCharname) return record;

        console.log(myCharName, cpuCharname);
        console.log(record);

        return record;
      })
    );
  }

  function MinusCounter(
    myCharId: number,
    cpuCharId: number,
    player: "me" | "cpu",
    level: "lv5" | "lv6" | "lv7" | "lv8"
  ) {}

  // when MyChar Select box, and VSChar Select
  React.useEffect(() => {
    console.log("*** change mychar, vschar", myCharId, vsCharId);

    // find selected all mychar record
    const myCharRecord = records.find((rec) => rec.id == myCharId);
    if (!myCharRecord) return;

    // find mychar name
    const myChar = CHARACTERS.find((char) => char.id == myCharId);
    if (!myChar) return;

    // find vschar name
    const vsChar = CHARACTERS.find((char) => char.id == vsCharId);
    if (!vsChar) return;

    SetSelectedRecord(
      (myCharRecord as { [key: string]: { [key: string]: LevelType } })[
        myChar.name
      ][vsChar.name]
    );

    // find selected mychar and vschar record
  }, [myCharId, vsCharId]);

  return (
    <div className="p-4 bg-neutral-900 flex flex-col items-center items-stretch">
      <header className={`flex flex-col gap-4 items-center mb-4`}>
        <Link to="/">
          <h1
            className={`text-2xl px-2 hover:bg-neutral-200 hover:text-neutral-900
              rounded-md transition ease-in delay-100`}
          >
            BackToBack
          </h1>
        </Link>

        <div className="flex gap-4 justify-center items-center">
          <select
            name="me"
            id="me"
            onChange={(e) => SetMyChar(Number(e.target.value))}
            className={`px-1 border border-neutral-500 w-30 text-center
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
            onChange={(e) => SetVsChar(Number(e.target.value))}
            className={`px-1 border border-neutral-500 w-30 text-center
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

      {selectedRecord && <ShowRecords record={selectedRecord} />}
      {myCharId && vsCharId && selectedRecord && (
        <CPUCounter
          myCharId={myCharId}
          cpuCharId={vsCharId}
          record={selectedRecord}
          plusCounter={PlusCounter}
          minusCounter={MinusCounter}
        />
      )}
    </div>
  );
}
