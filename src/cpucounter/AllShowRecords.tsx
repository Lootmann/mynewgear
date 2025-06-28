import { CHARACTERS } from "../global/characters";
import { LevelDataType, RecordType } from "../types/record";
import { CharNameFindByid } from "./Records";

function calcTotal(eachRecord: LevelDataType, side: "me" | "cpu") {
  let sum = 0;
  if (side === "me") {
    sum += eachRecord.lv5[0];
    sum += eachRecord.lv6[0];
    sum += eachRecord.lv7[0];
    sum += eachRecord.lv8[0];
  } else {
    sum += eachRecord.lv5[1];
    sum += eachRecord.lv6[1];
    sum += eachRecord.lv7[1];
    sum += eachRecord.lv8[1];
  }

  return sum;
}

function AllWinRate(eachRecord: LevelDataType) {
  let me = 0;
  me += eachRecord.lv5[0];
  me += eachRecord.lv6[0];
  me += eachRecord.lv7[0];
  me += eachRecord.lv8[0];

  let cpu = 0;
  cpu += eachRecord.lv5[1];
  cpu += eachRecord.lv6[1];
  cpu += eachRecord.lv7[1];
  cpu += eachRecord.lv8[1];

  if (me + cpu == 0) return "0.00";
  else return `${((me * 100) / (me + cpu)).toFixed(2)}`;
}

export function AllShowRecords({
  myCharId,
  record,
}: {
  myCharId: number;
  record: RecordType;
}) {
  const myCharName = CharNameFindByid(myCharId);

  console.log(record[myCharName]);

  return (
    <div className={`flex flex-col items-center`}>
      <div className="flex justify-center">
        <header className="flex gap-4 mb-4">
          <h1 className="border-b px-1">Memo Counter</h1>
        </header>
      </div>

      <table className="table border-collapse">
        <thead className="border">
          <tr className="border">
            <th className="px-2 border">CPU</th>
            <th className="px-2 border">Total</th>
            <th className="px-2 border">Lv5</th>
            <th className="px-2 border">Lv6</th>
            <th className="px-2 border">Lv7</th>
            <th className="px-2 border">Lv8</th>
            <th className="px-2 border">AllWinRate</th>
          </tr>
        </thead>

        <tbody className="text-xl border">
          {CHARACTERS.map(
            (char) =>
              char.id != 0 &&
              record[myCharName] !== undefined && (
                <tr key={char.id} className="border text-center">
                  <td className="px-2 border border-neutral-500">
                    {char.name}
                  </td>
                  <td className="px-2 border border-neutral-500">
                    {calcTotal(record[myCharName][char.name], "me")} -{" "}
                    {calcTotal(record[myCharName][char.name], "cpu")}{" "}
                  </td>
                  <td className="px-2 border border-neutral-500">
                    {record[myCharName][char.name]?.lv5[0]} -{" "}
                    {record[myCharName][char.name]?.lv5[1]}
                  </td>

                  <td className="px-2 border border-neutral-500">
                    {record[myCharName][char.name]?.lv6[0]} -{" "}
                    {record[myCharName][char.name]?.lv6[1]}
                  </td>

                  <td className="px-2 border border-neutral-500">
                    {record[myCharName][char.name]?.lv7[0]} -{" "}
                    {record[myCharName][char.name]?.lv7[1]}
                  </td>

                  <td className="px-2 border border-neutral-500">
                    {record[myCharName][char.name]?.lv8[0]} -{" "}
                    {record[myCharName][char.name]?.lv8[1]}
                  </td>

                  <td className="px-2 border border-neutral-500">
                    {AllWinRate(record[myCharName][char.name])}%
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
}
