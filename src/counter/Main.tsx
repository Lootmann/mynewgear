import Counter from "./Counter";
import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { CounterType } from "../types/counter";

const button = `border-2 px-2 rounded-md`;

export default function Main() {
  // load counters from localstorage
  const storageId = "my-awesome-counter-bro";
  const [counters, setCounters] = React.useState<CounterType[]>(() => {
    const raw = localStorage.getItem(storageId) ?? "[]";
    return JSON.parse(raw);
  });

  // save counters to localstorage
  React.useEffect(() => {
    const timer = setInterval(() => {
      localStorage.setItem(storageId, JSON.stringify(counters));
    }, 3000);

    return () => clearInterval(timer);
  }, [counters]);

  function allClear() {
    const updateCounters = [];

    for (const counter of counters) {
      updateCounters.push({
        id: counter.id,
        total: 0,
        success: 0,
        input: counter.input,
      });
    }

    setCounters(updateCounters);
  }

  function addCounter() {
    setCounters((prevCounters) => [
      ...prevCounters,
      {
        id: uuidv4(),
        total: 0,
        success: 0,
        input: "sample",
      },
    ]);
  }

  function addTotal(key: string) {
    const updateCounters = counters.map((counter) => {
      if (counter.id == key) {
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
      if (counter.id == key) {
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

  function addInput(
    key: string,
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) {
    const updateCounters = counters.map((counter) => {
      if (counter.id == key) {
        return {
          ...counter,
          input: event.target.value,
        };
      } else {
        return counter;
      }
    });

    setCounters(updateCounters);
  }

  function delCoutner(key: string) {
    setCounters(counters.filter((counter) => counter.id != key));
  }

  return (
    <div className="p-4">
      <header className="flex gap-4 align-middle justify-center mb-4">
        <Link to="/">
          <h1 className="text-2xl">BackToBack</h1>
        </Link>

        <button
          onClick={() => addCounter()}
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
            key={counter.id}
            id={counter.id}
            input={counter.input}
            total={counter.total}
            success={counter.success}
            handleAddSuccess={() => addSuccess(counter.id)}
            handleAddTotal={() => addTotal(counter.id)}
            handleDelCounter={() => delCoutner(counter.id)}
            handleAddInput={addInput}
          />
        ))}
      </div>
    </div>
  );
}
