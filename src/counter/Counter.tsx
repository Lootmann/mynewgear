export type counterType = {
  key: string;
  total: number;
  success: number;
  input: string;
};

type counterProps = {
  key: string;
  total: number;
  success: number;
  input: string;
  handleAddTotal: (key: string) => void;
  handleAddSuccess: (key: string) => void;
  handleDelCounter: (key: string) => void;
};

const nubmerToString = (num: number) => {
  const str = String(num);
  if (num < 10) return "00" + str;
  else if (num < 100) return "0" + str;
  return str;
};

function showSuccessPercentile(success: number, total: number) {
  if (total == 0) return 0;
  return ((success / total) * 100).toFixed(2);
}

export default function Counter(props: counterProps) {
  return (
    <div className="flex border-1">
      <div className="flex flex-col justify-center px-1">
        <div className="">
          <span className="text-xl mr-1">
            {nubmerToString(props.success)}/{nubmerToString(props.total)}
          </span>
          <span className="text-xl">
            ({showSuccessPercentile(props.success, props.total)}%)
          </span>
        </div>

        <div className="flex justify-center pl-1 mb-1 gap-1">
          <button
            onClick={() => props.handleAddSuccess(props.key)}
            className="border-2 text-md flex-grow rounded-md font-bold
            hover:bg-green-700 hover:border-green-700"
          >
            ➕
          </button>
          <button
            onClick={() => props.handleAddTotal(props.key)}
            className="border-2 text-md flex-grow rounded-md font-bold
            hover:bg-yellow-700 hover:border-yellow-700"
          >
            ➖
          </button>
        </div>
      </div>

      <textarea
        name=""
        id=""
        className="flex-grow bg-neutral-200 text-neutral-800 px-1"
        placeholder="Show Me Your Combos :D"
      ></textarea>

      <button
        onClick={() => props.handleDelCounter(props.key)}
        className="bg-red-600"
      >
        DEL
      </button>
    </div>
  );
}
