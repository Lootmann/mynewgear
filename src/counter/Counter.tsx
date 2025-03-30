import { useState } from "react";

export type counterType = {
  id: string;
  total: number;
  success: number;
  input: string;
};

type counterProps = {
  total: number;
  success: number;
  input: string;
};

const nubmerToString = (num: number) => {
  const str = String(num);
  if (num < 10) return "00" + str;
  else if (num < 100) return "0" + str;
  return str;
};

export default function Counter(props: counterProps) {
  const [total, setTotal] = useState<number>(props.total);
  const [success, setSuccess] = useState<number>(props.success);

  function addTotal() {
    setTotal((total) => total + 1);
  }

  function addSuccess() {
    setSuccess((success) => success + 1);
    setTotal((total) => total + 1);
  }

  return (
    <div className="flex border-1">
      <div className="flex flex-col justify-center px-1">
        <div className="">
          <span className="text-xl mr-1">
            {nubmerToString(success)}/{nubmerToString(total)}
          </span>
          <span className="text-xl">
            ({((success / total) * 100).toFixed(2)}%)
          </span>
        </div>

        <div className="flex justify-center pl-1 mb-1 gap-1">
          <button
            onClick={() => addSuccess()}
            className="border-2 text-md flex-grow rounded-md font-bold
            hover:bg-green-700 hover:border-green-700"
          >
            ➕
          </button>
          <button
            onClick={() => addTotal()}
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

      <button className="bg-red-600">DEL</button>
    </div>
  );
}
