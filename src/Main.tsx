import { Link } from "react-router-dom";

function Main() {
  return (
    <>
      <header className="flex justify-center border-b-neutral-500 border-b-2">
        <h1 className="text-3xl py-4">Hello World :D</h1>
      </header>

      <div className="p-4">
        <p>hello world :D</p>

        <Link to="/counter">
          <button className="rounded-md border-2 px-2">Link to Counter</button>
        </Link>
      </div>
    </>
  );
}

export default Main;
