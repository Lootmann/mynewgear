import Counter, { counterType } from "./Counter";
import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const button = `border-2 px-2 rounded-md`;

export default function Main() {
  const [counters, setCounters] = useState<counterType[]>([]);

  // TODO: you do more sophisticated.
  function allClear() {
    const updateCounters = [];

    for (const counter of counters) {
      updateCounters.push({
        key: counter.key,
        total: 0,
        success: 0,
        input: counter.input,
      });
    }

    setCounters(updateCounters);
  }

  function addCounter() {
    setCounters([
      ...counters,
      { key: uuidv4(), total: 3, success: 1, input: "" },
    ]);
  }

  function addTotal(key: string) {
    const updateCounters = counters.map((counter) => {
      if (counter.key == key) {
        return {
          ...counter,
          total: counter.total + 1,
          success: counter.success,
        };
      } else {
        return counter;
      }
    });

    setCounters(updateCounters);
  }

  function addSuccess(key: string) {
    const updateCounters = counters.map((counter) => {
      if (counter.key == key) {
        return {
          ...counter,
          total: counter.total + 1,
          success: counter.success + 1,
        };
      } else {
        return counter;
      }
    });

    setCounters(updateCounters);
  }

  function delCoutner(key: string) {
    setCounters(counters.filter((counter) => counter.key != key));
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
          onClick={() => allClear()}
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
            key={counter.key}
            input={counter.input}
            total={counter.total}
            success={counter.success}
            handleAddSuccess={() => addSuccess(counter.key)}
            handleAddTotal={() => addTotal(counter.key)}
            handleDelCounter={() => delCoutner(counter.key)}
          />
        ))}
      </div>
    </div>
  );
}
