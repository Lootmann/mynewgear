import { LevelDataType, LevelType } from "../types/record";

export function CPUCounter({
  myCharId,
  cpuCharId,
  record,
  plusCounter,
  minusCounter,
}: {
  myCharId: number;
  cpuCharId: number;
  record: LevelDataType;
  plusCounter: (
    myCharId: number,
    cpuCharId: number,
    player: "me" | "cpu",
    level: LevelType
  ) => void;
  minusCounter: (
    myCharId: number,
    cpuCharId: number,
    player: "me" | "cpu",
    level: LevelType
  ) => void;
}) {
  function handlePlusButton(
    myCharId: number,
    cpuCharId: number,
    player: "me" | "cpu",
    level: LevelType
  ) {
    plusCounter(myCharId, cpuCharId, player, level);
  }

  function handleMinusButton(
    myCharId: number,
    cpuCharId: number,
    player: "me" | "cpu",
    level: LevelType
  ) {
    minusCounter(myCharId, cpuCharId, player, level);
  }

  const levels: LevelType[] = ["lv5", "lv6", "lv7", "lv8"];

  return (
    <div className="flex flex-col">
      <header className="text-center mb-2">
        <h1>CPU Counter</h1>
      </header>

      <div className="grid grid-rows-2 grid-cols-2 mx-20 text-center gap-2">
        {levels.map((level) => {
          const score = record[level];
          return (
            <div
              key={level}
              className="grid grid-rows-2 grid-cols-3 border text-xl py-1"
            >
              <div className="row-span-2 border-r flex items-center justify-center">
                <p>{level}</p>
              </div>

              <div>{score[0]}</div>
              <div>{score[1]}</div>

              <div className="flex justify-around">
                <button
                  className="border px-1 rounded-md bg-blue-900 hover:bg-blue-400"
                  onClick={() =>
                    handlePlusButton(myCharId, cpuCharId, "me", level)
                  }
                >
                  ＋
                </button>
                <button
                  className="border px-1 rounded-md bg-green-900 hover:bg-green-500"
                  onClick={() =>
                    handleMinusButton(myCharId, cpuCharId, "me", level)
                  }
                >
                  －
                </button>
              </div>

              <div className="flex justify-around">
                <button
                  className="border px-1 rounded-md bg-blue-900 hover:bg-blue-400"
                  onClick={() =>
                    handlePlusButton(myCharId, cpuCharId, "cpu", level)
                  }
                >
                  ＋
                </button>
                <button
                  className="border px-1 rounded-md bg-green-900 hover:bg-green-500"
                  onClick={() =>
                    handleMinusButton(myCharId, cpuCharId, "cpu", level)
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
