import { Link } from "react-router-dom";
import Counter, { counterType } from "./Counter";
import { useState } from "react";

import { v4 as uuidv4 } from "uuid";

const button = `border-2 px-2 rounded-md`;

export default function Main() {
  const [counters, steCounters] = useState<counterType[]>([]);

  function addCounter() {
    steCounters([
      ...counters,
      { id: uuidv4(), total: 3, success: 1, input: "" },
    ]);
  }

  return (
    <div className="p-4">
      <header className="flex gap-4 align-middle justify-center mb-4">
        <Link to="/">
          <h1 className="text-2xl">BackToBack</h1>
        </Link>

        <button
          onClick={() => {
            addCounter();
          }}
          className={`${button}
          bg-green-800 border-green-800
          hover:bg-green-400 hover:border-green-400 hover:text-neutral-800
          transition delay-75`}
        >
          Add
        </button>

        <button
          className={`${button}
        bg-amber-800 border-amber-800
        hover:bg-amber-400  hover:border-amber-400 hover:text-neutral-800
        transition delay-75`}
        >
          AllClear
        </button>
      </header>

      <div className="flex flex-col gap-2">
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            input={counter.input}
            total={counter.total}
            success={counter.success}
          />
        ))}
      </div>
    </div>
  );
}
