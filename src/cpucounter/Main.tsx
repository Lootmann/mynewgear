import React from "react";
import { CPUCounterType } from "../types/cpucounter";
import CPUCounter from "./CPUCounter";

const characters = [
  "aki",
  "blanka",
  "cammy",
  "chunli",
  "deejay",
  "dhalsim",
  "ed",
  "ehonda",
  "elena",
  "gouki",
  "guile",
  "jamie",
  "jp",
  "juri",
  "ken",
  "kimberly",
  "lily",
  "luke",
  "mai",
  "manon",
  "marisa",
  "rashid",
  "ryu",
  "terry",
  "vega",
  "zangief",
];

export default function Main() {
  const [records, setRecords] = React.useState<CPUCounterType[]>(() => {
    let init: CPUCounterType[] = [];
    characters.sort().forEach((character, index) => {
      init.push({
        id: index,
        characterName: character,
        ranks: [
          { key: "lv5", rank: [0, 0] },
          { key: "lv6", rank: [0, 0] },
          { key: "lv7", rank: [0, 0] },
          { key: "lv8", rank: [0, 0] },
        ],
      });
    });
    return init;
  });

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
