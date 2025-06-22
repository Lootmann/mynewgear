import React from "react";
import { LevelType } from "./Records";

export function CPUCounter({
  myCharId,
  cpuCharId,
  record,
  plusCounter,
  minusCounter,
}: {
  myCharId: number;
  cpuCharId: number;
  record: LevelType;
  plusCounter: (
    myCharId: number,
    cpuCharId: number,
    player: "me" | "cpu",
    level: "lv5" | "lv6" | "lv7" | "lv8"
  ) => void;
  minusCounter: (
    myCharId: number,
    cpuCharId: number,
    player: "me" | "cpu",
    level: "lv5" | "lv6" | "lv7" | "lv8"
  ) => void;
}) {
  const [records, _] = React.useState(() => {
    let rec: any = [];

    rec.push(
      {
        key: "Lv5",
        score: [record.lv5[0], record.lv5[1]],
      },
      {
        key: "Lv6",
        score: [record.lv6[0], record.lv6[1]],
      },
      {
        key: "Lv7",
        score: [record.lv7[0], record.lv7[1]],
      },
      {
        key: "Lv8",
        score: [record.lv8[0], record.lv8[1]],
      }
    );
    return rec;
  });

  // handle plus button function
  function handlePlusButton(
    myCharId: number,
    cpuCharId: number,
    player: "me" | "cpu",
    level: "lv5" | "lv6" | "lv7" | "lv8"
  ) {
    plusCounter(myCharId, cpuCharId, player, level);
  }

  // handle minus button function
  function handleMinusButton(
    myCharId: number,
    cpuCharId: number,
    player: "me" | "cpu",
    level: "lv5" | "lv6" | "lv7" | "lv8"
  ) {
    minusCounter(myCharId, cpuCharId, player, level);
  }

  return (
    <div className="flex flex-col">
      <header className="text-center mb-2">
        <h1>CPU Counter</h1>
      </header>

      <div className="grid grid-rows-2 grid-cols-2 mx-20  text-center">
        {records.map((rec: any) => {
          return (
            <div
              key={rec.key}
              className="grid grid-rows-2 grid-cols-3 border text-xl py-1"
            >
              <div className="row-span-2 border-r flex items-center justify-center">
                <p>{rec.key}</p>
              </div>
              <div>{rec.score[0]}</div>
              <div>{rec.score[1]}</div>

              <div className="flex justify-around">
                <button
                  className="border px-1 rounded-md bg-blue-900 hover:bg-blue-400"
                  onClick={() =>
                    handlePlusButton(myCharId, cpuCharId, "me", rec.key)
                  }
                >
                  ＋
                </button>
                <button
                  className="border px-1 rounded-md bg-green-900 hover:bg-green-500"
                  onClick={() =>
                    handleMinusButton(myCharId, cpuCharId, "me", rec.key)
                  }
                >
                  －
                </button>
              </div>

              <div className="flex justify-around">
                <button
                  className="border px-1 rounded-md bg-blue-900 hover:bg-blue-400"
                  onClick={() =>
                    handlePlusButton(myCharId, cpuCharId, "cpu", rec.key)
                  }
                >
                  ＋
                </button>
                <button
                  className="border px-1 rounded-md bg-green-900 hover:bg-green-500"
                  onClick={() =>
                    handleMinusButton(myCharId, cpuCharId, "cpu", rec.key)
                  }
                >
                  －
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
