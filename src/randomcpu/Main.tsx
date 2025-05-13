import React from "react";
import { Link } from "react-router-dom";
import { CPUType } from "../types/counter";

function getRandomCPULevel(): number {
  const random = Math.random();

  if (random < 0.2) return 6;
  else if (random < 0.6) return 7;
  else return 8;
}

function getRandomCharacter(): string {
  const characters = [
    "gouki",
    "aki",
    "blanka",
    "cammy",
    "chunli",
    "deejay",
    "dhalsim",
    "ed",
    "ehonda",
    "elena",
    "guile",
    "jamie",
    "jp",
    "juri",
    "kimberly",
    "ken",
    "lily",
    "luke",
    "mai",
    "manon",
    "marisa",
    "vega",
    "rashid",
    "ryu",
    "terry",
    "zangief",
  ];

  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

export default function Main() {
  const [CPU, setCPU] = React.useState<CPUType | null>(null);

  function setRandomCPU() {
    const level = getRandomCPULevel();
    const character = getRandomCharacter();
    setCPU({ level: level, character: character });
  }

  return (
    <div className="p-4 bg-neutral-900">
      <header className={`flex gap-4 align-middle justify-center mb-4`}>
        <Link to="/">
          <h1
            className={`text-2xl px-2 hover:bg-neutral-200 hover:text-neutral-900
              rounded-md transition ease-in delay-100`}
          >
            BackToBack
          </h1>
        </Link>
      </header>

      <div
        className={`p-10 flex flex-col align-middle justify-center items-center`}
      >
        <div className="flex gap-4 mb-4 text-xl justify-center">
          <button
            onClick={() => setRandomCPU()}
            className={`border-2 px-3 rounded-md`}
          >
            GET CPU
          </button>
        </div>

        <div className="flex flex-col text-2xl">
          {CPU ? (
            <>
              <p>Level: {CPU.level}</p>
              <p>Character: {CPU.character}</p>
              <img
                src={`./images/${CPU.character}.png`}
                alt="logo"
                width={300}
              ></img>
            </>
          ) : (
            <>
              <p>Pls Push 'GET CPU' Button D;</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
