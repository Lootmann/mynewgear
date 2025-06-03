import React from "react";
import { CPUCounter } from "../types/cpucounter";

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
  const [records, setRecords] = React.useState<CPUCounter[]>(() => {
    let init: CPUCounter[] = [];
    characters.forEach((character, index) => {
      init.push({
        id: index,
        characterName: character,
        rank: { lv5: [0, 0], lv6: [0, 0], lv7: [0, 0], lv8: [0, 0] },
      });
    });
    return init;
  });

  return (
    <div className="p-4 bg-neutral-900">
      <div className="flex flex-col gap-2">
        {records.map((record) => (
          <div className="flex flex-col p-2 border" key={record.id}>
            <header>
              <h2 className="uppercase underline">{record.characterName}</h2>
            </header>

            <div>
              <p>hoge</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
