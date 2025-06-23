import React from "react";
import { LevelDataType } from "./Records";

function calcWinRate(meWins: number, cpuWins: number) {
  if (meWins + cpuWins == 0) return 0;
  else return (meWins / (meWins + cpuWins)).toFixed(2);
}

export function ShowRecords({ record }: { record: LevelDataType }) {
  const [gridRecords, _] = React.useState(() => {
    let conv_record = [];
    conv_record.push(
      { key: "lv5", me: record.lv5[0], cpu: record.lv5[1] },
      { key: "lv6", me: record.lv6[0], cpu: record.lv6[1] },
      { key: "lv7", me: record.lv7[0], cpu: record.lv7[1] },
      { key: "lv8", me: record.lv8[0], cpu: record.lv8[1] }
    );
    return conv_record;
  });

  return (
    <div className="flex flex-col items-center mb-5">
      <header className="mb-2 text-center">
        <h1>Show Records</h1>
      </header>

      <table className="table-fixed table-collapse">
        <thead className="border">
          <tr>
            <th className="border px-2 w-20">Level</th>
            <th className="border px-2 w-20">Total</th>
            <th className="border px-2 w-20">WinRate</th>
            <th className="border px-2 w-20">Record</th>
          </tr>
        </thead>

        <tbody className="text-xl">
          {gridRecords.map((record) => {
            return (
              <tr key={record.key} className="border">
                <td className="border px-2 text-center">
                  <span>{record.key}</span>
                </td>
                <td className="border px-2 text-center">
                  <span>{record.me + record.cpu}</span>
                </td>
                <td className="border px-2 text-center">
                  <span>{calcWinRate(record.me, record.cpu)}</span>
                </td>
                <td className="border px-2 text-center">
                  <span>
                    {record.me} - {record.cpu}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
