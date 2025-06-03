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

export default function Main() {
  return (
    <div className="p-4 bg-neutral-900">
      <div>
        {characters.map((character) => (
          <div>{character}</div>
        ))}
      </div>
    </div>
  );
}
