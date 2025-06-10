import { CPUCounterType } from "../types/cpucounter";

function CPUCounter({ record }: { record: CPUCounterType }) {
  const charId = record.id;
  const charName = record.characterName;

  function handleLeftClick(
    e: React.MouseEvent<HTMLDivElement>,
    id: number,
    name: string,
    rank: string
  ) {
    e.preventDefault();
    console.log(`Left: ${id} ${name} ${rank}`);
  }

  function handleRightClick(
    e: React.MouseEvent<HTMLDivElement>,
    id: number,
    name: string,
    rank: string
  ) {
    e.preventDefault();
    console.log(`Right: ${id} ${name} ${rank}`);
  }

  return (
    <div className="flex flex-col p-2 border" key={record.id}>
      <header>
        <h2 className="uppercase underline">{record.characterName}</h2>
      </header>

      <div className="flex px-2 py-1 gap-4">
        {record.ranks.map((rank) => (
          <div
            className="border flex flex-col justify-between gap-1 px-2 py-1 w-24"
            key={rank.key}
          >
            <div className="text-center underline text-xl">{rank.key}</div>

            <div className="flex justify-around gap-4">
              <div
                className={`
                  text-center grow
                  hover:bg-green-700 bg-green-950 border border-green-700 rounded-md
                `}
                onClick={(e) => handleLeftClick(e, charId, charName, rank.key)}
                onContextMenu={(e) =>
                  handleRightClick(e, charId, charName, rank.key)
                }
              >
                <span className="text-2xl">{rank.rank[0]}</span>
              </div>

              <div
                className={`
                  text-center grow
                  hover:bg-blue-700 bg-blue-950 border border-blue-700 rounded-md
                `}
                onClick={(e) => handleLeftClick(e, charId, charName, rank.key)}
                onContextMenu={(e) =>
                  handleRightClick(e, charId, charName, rank.key)
                }
              >
                <span className="text-2xl">{rank.rank[1]}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CPUCounter;
