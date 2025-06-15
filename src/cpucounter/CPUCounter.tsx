import { CPUCounterType } from "../types/cpucounter";

function CPUCounter({
  record,
  handleCounterPlus,
  handleCounterMinus,
}: {
  record: CPUCounterType;
  handleCounterPlus: (id: number, key: string, side: "me" | "enemy") => void;
  handleCounterMinus: (id: number, key: string, side: "me" | "enemy") => void;
}) {
  // when left click any rank number
  function handleLeftClick(
    e: React.MouseEvent<HTMLDivElement>,
    id: number,
    rank: string,
    side: "me" | "enemy"
  ) {
    e.preventDefault();
    handleCounterPlus(id, rank, side);
  }

  // when right click any rank number
  function handleRightClick(
    e: React.MouseEvent<HTMLDivElement>,
    id: number,
    rank: string,
    side: "me" | "enemy"
  ) {
    e.preventDefault();
    handleCounterMinus(id, rank, side);
  }

  return (
    <div
      className={`flex flex-col p-2 border hover:border-yellow-500 hover:bg-[#2f2e2e]`}
      key={record.id}
    >
      <div className="flex items-center px-2 py-1 gap-4">
        <div className="capitalize w-20 text-center text-xl border-b-1 pb-1">
          {record.characterName}
        </div>

        {record.ranks.map((rank) => (
          <div
            className={`border flex flex-col justify-between
              gap-1 px-1 py-1 min-w-26 hover:bg-neutral-900`}
            key={rank.key}
          >
            <div className="text-center underline text-xl">{rank.key}</div>

            <div className="flex justify-around gap-1">
              <div
                className={`text-center grow hover:bg-green-700 bg-green-950
                  border border-green-700 rounded-md select-none`}
                onClick={(e) => handleLeftClick(e, record.id, rank.key, "me")}
                onContextMenu={(e) =>
                  handleRightClick(e, record.id, rank.key, "me")
                }
              >
                <span className="text-2xl">{rank.rank[0]}</span>
              </div>

              <div
                className={`text-center grow hover:bg-blue-700 bg-blue-950
                  border border-blue-700 rounded-md select-none`}
                onClick={(e) =>
                  handleLeftClick(e, record.id, rank.key, "enemy")
                }
                onContextMenu={(e) =>
                  handleRightClick(e, record.id, rank.key, "enemy")
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
