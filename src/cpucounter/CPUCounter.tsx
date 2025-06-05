import { CPUCounterType } from "../types/cpucounter";

function CPUCounter({ record }: { record: CPUCounterType }) {
  return (
    <div className="flex flex-col p-2 border" key={record.id}>
      <header>
        <h2 className="uppercase underline">{record.characterName}</h2>
      </header>

      <div className="flex px-2 py-1 gap-4">
        {record.ranks.map((record) => (
          <div className="border flex flex-col justify-between gap-1 px-2 py-1 w-20">
            <div className="text-center underline text-xl">{record.key}</div>

            <div className="flex justify-around gap-4">
              <div className="text-center text-xl">{record.rank[0]}</div>
              <div className="text-center text-xl">{record.rank[1]}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CPUCounter;
