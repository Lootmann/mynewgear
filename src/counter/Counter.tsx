import { Link } from "react-router-dom";

const button = `border-2 px-2 rounded-md`;

export default function Counter() {
  return (
    <div className="p-4">
      <header className="flex gap-4 align-middle justify-center">
        <Link to="/">
          <h1 className="text-2xl">BackToBack</h1>
        </Link>

        <button
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
    </div>
  );
}
