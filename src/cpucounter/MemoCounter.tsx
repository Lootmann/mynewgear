import React from "react";
import { LevelType } from "../types/record";

export function MemoCounter({
  myCharId,
  vsCharId,
  plusCounter,
}: {
  myCharId: number;
  vsCharId: number;
  plusCounter: (
    myCharId: number,
    cpuCharId: number,
    player: "me" | "cpu",
    level: LevelType,
    amount: number
  ) => void;
}) {
  const [meRecord, setMeRecord] = React.useState<number>(0);
  const [cpuRecord, setCPURecord] = React.useState<number>(0);
  const [level, setLevel] = React.useState<LevelType>("lv5");

  function handleAddButton(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    plusCounter(myCharId, vsCharId, "me", level, meRecord);
    plusCounter(myCharId, vsCharId, "cpu", level, cpuRecord);
    setMeRecord(0);
    setCPURecord(0);
  }

  function handlePlusButton(side: "me" | "cpu") {
    if (side === "me") {
      setMeRecord((prev) => prev + 1);
    } else {
      setCPURecord((prev) => prev + 1);
    }
  }

  function handleMinusButton(side: "me" | "cpu") {
    if (side === "me") {
      if (meRecord > 0) setMeRecord((prev) => prev - 1);
    } else {
      if (cpuRecord > 0) setCPURecord((prev) => prev - 1);
    }
  }

  const levels: LevelType[] = ["lv5", "lv6", "lv7", "lv8"];

  return (
    <div className="flex flex-col items-center mb-8 border px-1 py-2 rounded-md">
      <header className="flex gap-4 mb-4">
        <h1 className="border-b px-1">Memo Counter</h1>

        <button
          className={`px-2 border hover:bg-blue-400 hover:text-black rounded-md`}
          onClick={(e) => handleAddButton(e)}
        >
          Adding
        </button>
      </header>

      <div className="flex gap-4 mb-2">
        <h2 className="text-xl border-b">Level</h2>

        <select
          className="text-xl px-2 rounded-md border"
          onChange={(e) => setLevel(e.target.value as LevelType)}
        >
          {levels.map((level) => (
            <option key={level} className="bg-neutral-950 text-white">
              {level}
            </option>
          ))}
        </select>
      </div>

      <div className="flex gap-4 px-4 py-2 border">
        <div className="text-center">
          <p className="mb-2 text-xl">{meRecord}</p>

          <div className="flex gap-3">
            <button
              onClick={() => handlePlusButton("me")}
              className={`px-1 border bg-neutral-900 hover:bg-neutral-400
                rounded-md`}
            >
              ＋
            </button>
            <button
              onClick={() => handleMinusButton("me")}
              className={`px-1 border bg-neutral-900 hover:bg-neutral-400
                rounded-md`}
            >
              －
            </button>
          </div>
        </div>

        <div className="text-center">
          <p className="mb-2 text-xl">{cpuRecord}</p>

          <div className="flex gap-3">
            <button
              onClick={() => handlePlusButton("cpu")}
              className={`px-1 border bg-neutral-900 hover:bg-neutral-400
                rounded-md`}
            >
              ＋
            </button>
            <button
              onClick={() => handleMinusButton("cpu")}
              className={`px-1 border bg-neutral-900 hover:bg-neutral-400
                rounded-md`}
            >
              －
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
