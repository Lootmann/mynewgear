import { Link } from "react-router-dom";
import { CHARACTERS } from "../global/characters";
import { Capitalize } from "../utils/string";
import React from "react";
import { loadStorage, saveStorage } from "./Storage";
import { ShowRecords } from "./ShowRecords";
import { CPUCounter } from "./CPUCounter";
import { CharNameFindByid } from "./Records";
import { LevelDataType, LevelType, RecordType } from "../types/record";
import { MemoCounter } from "./MemoCounter";

export default function Main() {
  const STORAGE_ID = "new-cpu-counter-storage";
  const [myCharId, SetMyChar] = React.useState<number>(15);
  const [vsCharId, SetVsChar] = React.useState<number>(1);
  const [selectedRecord, setSelectedRecord] = React.useState<LevelDataType>();
  const [records, setRecords] = React.useState<RecordType>(() => {
    return loadStorage(STORAGE_ID);
  });

  function PlusCounter(
    myCharId: number,
    cpuCharId: number,
    player: "me" | "cpu",
    level: LevelType,
    amount: number
  ) {
    if (!myCharId || !cpuCharId) return;
    const myCharName = CharNameFindByid(myCharId);
    const vsCharName = CharNameFindByid(vsCharId);

    setRecords((prev) => {
      if (!prev[myCharName]) return prev;
      if (!prev[myCharName][vsCharName]) return prev;

      const currentRecord = prev[myCharName][vsCharName][level];
      const newRecord: [number, number] = [
        player === "me" ? currentRecord[0] + amount : currentRecord[0],
        player === "cpu" ? currentRecord[1] + amount : currentRecord[1],
      ];

      return {
        ...prev,
        [myCharName]: {
          ...prev[myCharName],
          [vsCharName]: {
            ...prev[myCharName][vsCharName],
            [level]: newRecord,
          },
        },
      };
    });
  }

  function MinusCounter(
    myCharId: number,
    cpuCharId: number,
    player: "me" | "cpu",
    level: LevelType,
    amount: number
  ) {
    if (!myCharId || !cpuCharId) return;
    const myCharName = CharNameFindByid(myCharId);
    const vsCharName = CharNameFindByid(vsCharId);

    setRecords((prev) => {
      if (!prev[myCharName]) return prev;
      if (!prev[myCharName][vsCharName]) return prev;

      const currentRecord = prev[myCharName][vsCharName][level];

      const newRecord: [number, number] = [
        player === "me" && currentRecord[0] > 0
          ? currentRecord[0] - amount
          : currentRecord[0],
        player === "cpu" && currentRecord[1] > 0
          ? currentRecord[1] - amount
          : currentRecord[1],
      ];

      return {
        ...prev,
        [myCharName]: {
          ...prev[myCharName],
          [vsCharName]: {
            ...prev[myCharName][vsCharName],
            [level]: newRecord,
          },
        },
      };
    });
  }

  React.useEffect(() => {
    saveStorage(STORAGE_ID, records);
  }, [records]);

  // when select myCharId and vsCharId
  // show Records
  React.useEffect(() => {
    if (!myCharId || !vsCharId) return;
    if (!(1 <= myCharId && myCharId <= CHARACTERS.length)) return;
    if (!(1 <= vsCharId && vsCharId <= CHARACTERS.length)) return;

    // find selected mychar and vschar record
    const myCharName = CharNameFindByid(myCharId);
    const vsCharName = CharNameFindByid(vsCharId);

    setSelectedRecord(() => {
      const myCharRecrods = records[myCharName];
      if (!myCharRecrods) return;

      const vsCharRecord = myCharRecrods[vsCharName];
      if (!vsCharRecord) return;

      return vsCharRecord;
    });
  }, [myCharId, vsCharId, records]);

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
            value={myCharId}
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
            value={vsCharId}
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

      <MemoCounter
        myCharId={myCharId}
        vsCharId={vsCharId}
        plusCounter={PlusCounter}
      />

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
