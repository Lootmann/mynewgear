import { Link } from "react-router-dom";

export default function Main() {
  return (
    <div className="p-4 bg-neutral-900 flex flex-col items-center">
      <header className={`flex flex-col gap-4 items-center mb-4`}>
        <Link to="/">
          <h1
            className={`text-2xl px-2 hover:bg-neutral-200 hover:text-neutral-900
              rounded-md transition ease-in delay-100`}
          >
            BackToBack
          </h1>
        </Link>

        {/* Load all characters from constant */}
        <div className="flex gap-4 justify-center items-center">
          <select
            name="me"
            id="me"
            className={`border border-neutral-500 w-16 text-center text-xl`}
          >
            <option value="1">Ryu</option>
            <option value="2">Ken</option>
            <option value="3">A.K.I</option>
            <option value="4">DJ</option>
            <option value="5">Mai</option>
          </select>

          <select
            name="cpu"
            id="cpu"
            className={`border border-neutral-500 w-16 text-center text-xl`}
          >
            <option value="1">Ryu</option>
            <option value="2">Ken</option>
            <option value="3">A.K.I</option>
            <option value="4">DJ</option>
            <option value="5">Mai</option>
          </select>
        </div>
      </header>

      <div>show Records</div>
      <div>Counter CPU Records</div>
    </div>
  );
}
