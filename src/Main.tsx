import { Link } from "react-router-dom";

const button = `rounded-md border-2 px-2
  hover:bg-neutral-200 hover:text-neutral-900
  transition ease-in delay-10`;

function Main() {
  return (
    <>
      <header className="flex justify-center border-b-neutral-500 border-b-2">
        <h1 className="text-3xl py-4">Hello World :D</h1>
      </header>

      <div className="px-10 py-6">
        <header className="mb-4 flex gap-4">
          <Link to="/counter">
            <button className={button}>Link to Counter</button>
          </Link>

          <Link to="/randomcpu">
            <button className={button}>Random CPU</button>
          </Link>
        </header>

        <div className="">
          <p>This is my very webSite D;</p>
        </div>
      </div>
    </>
  );
}

export default Main;
