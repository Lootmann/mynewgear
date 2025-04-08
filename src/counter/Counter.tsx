import React from "react";

type counterProps = {
  id: string;
  total: number;
  success: number;
  input: string;
  handleAddTotal: (key: string) => void;
  handleAddSuccess: (key: string) => void;
  handleDelCounter: (key: string) => void;
  handleAddInput: (
    key: string,
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
};

const numberToString = (num: number) => {
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
      <div className="flex flex-col justify-center px-2">
        <div className="flex flex-col justify-center mb-1">
          <p className="text-xl">
            {numberToString(props.success)}/{numberToString(props.total)}
          </p>
          <p className="text-xl text-center">
            {showSuccessPercentile(props.success, props.total)}%
          </p>
        </div>

        <div className="flex justify-center pl-1 mb-1 gap-1">
          <button
            onClick={() => props.handleAddSuccess(props.id)}
            className="border-2 text-md flex-grow rounded-md font-bold
            hover:bg-green-700 hover:border-green-700"
          >
            ➕
          </button>
          <button
            onClick={() => props.handleAddTotal(props.id)}
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
        className="flex-grow bg-neutral-200 text-neutral-800 text-xl px-1"
        placeholder="Show Me Your Combos :D"
        value={props.input}
        // onChange={(e) => props.handleAddInput(props.id, e)}
        onChange={(e) => props.handleAddInput(props.id, e)}
      ></textarea>

      <button
        onClick={() => props.handleDelCounter(props.id)}
        className="bg-red-600"
      >
        DEL
      </button>
    </div>
  );
}
