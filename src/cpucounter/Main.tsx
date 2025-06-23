import React from "react";
import { CPUCounterType } from "../types/cpucounter";
import CPUCounter from "./CPUCounter";
import {
  loadCPUCounterData,
  saveCPUCounterData,
  STORAGE_ID,
} from "./SaveStorage";
import { Link } from "react-router-dom";
import { CHARACTERS } from "../global/characters";

export default function Main() {
  const [records, setRecords] = React.useState<CPUCounterType[]>(() => {
    const init = loadCPUCounterData(STORAGE_ID);

    // when localstorage is empty, initialize with default values
    if (init.length == 0) {
      return CHARACTERS.map((character) => {
        return {
          id: character.id,
          characterName: character.name,
          ranks: [
            { key: "lv5", rank: [0, 0] },
            { key: "lv6", rank: [0, 0] },
            { key: "lv7", rank: [0, 0] },
            { key: "lv8", rank: [0, 0] },
          ],
        };
      });
    }
    return init;
  });

  React.useEffect(() => {
    saveCPUCounterData(records, STORAGE_ID);
  }, [records]);

  // update records (increase rank[0] or rank[1])
  // when record.id == id and rank.key == key
  function handleCounterPlus(id: number, key: string, side: "me" | "enemy") {
    setRecords(
      records.map((record) => {
        if (record.id == id) {
          const rank = record.ranks.find((rank) => rank.key == key);
          if (rank) {
            if (side == "me") {
              rank.rank[0]++;
            } else {
              rank.rank[1]++;
            }
          }
        }

        return record;
      })
    );
  }

  // update records (decrease rank[0] or rank[1])
  // when record.id == id and rank.key == key
  function handleCounterMinus(id: number, key: string, side: "me" | "enemy") {
    setRecords(
      records.map((record) => {
        if (record.id == id) {
          const rank = record.ranks.find((rank) => rank.key == key);

          if (rank) {
            if (side == "me") {
              if (rank.rank[0] > 0) rank.rank[0]--;
            } else {
              if (rank.rank[1] > 0) rank.rank[1]--;
            }
          }
        }

        return record;
      })
    );
  }

  return (
    <div className="p-4 bg-neutral-900">
      <div className="flex gap-10 items-baseline">
        <Link
          to="/"
          className={`text-2xl px-2 hover:bg-neutral-200 hover:text-neutral-900
              rounded-md transition ease-in delay-100`}
        >
          BackToBack
        </Link>

        <h1 className="text-white text-2xl font-bold mb-4">CPUCounter</h1>
      </div>

      <div className="flex flex-col gap-2">
        {records.map((record) => (
          <CPUCounter
            key={record.id}
            record={record}
            handleCounterPlus={handleCounterPlus}
            handleCounterMinus={handleCounterMinus}
          />
        ))}
      </div>
    </div>
  );
}
