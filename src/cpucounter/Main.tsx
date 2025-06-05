import React from "react";
import { CPUCounterType } from "../types/cpucounter";
import CPUCounter from "./CPUCounter";

const characters = [
  "gouki",
  "aki",
  "blanka",
  "cammy",
  "chunli",
  "deejay",
  "dhalsim",
  "ed",
  "ehonda",
  "elena",
  "guile",
  "jamie",
  "jp",
  "juri",
  "kimberly",
  "ken",
  "lily",
  "luke",
  "mai",
  "manon",
  "marisa",
  "vega",
  "rashid",
  "ryu",
  "terry",
  "zangief",
];

export default function Main() {
  const [records, setRecords] = React.useState<CPUCounterType[]>(() => {
    let init: CPUCounterType[] = [];
    characters.forEach((character, index) => {
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

  return (
    <div className="p-4 bg-neutral-900">
      <div className="flex flex-col gap-2">
        {records.map((record) => (
          <CPUCounter key={record.id} record={record} />
        ))}
      </div>
    </div>
  );
}
