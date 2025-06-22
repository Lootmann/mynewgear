import { CHARACTERS } from "../global/characters";

/*
[
    {
        id:1,
        "char1": {
            "char1": { lv5: [], lv6: [], lv7: [], lv8: [] },
            "char2": { lv5: [], lv6: [], lv7: [], lv8: [] },
        },
    },
    ...
]
*/
type Level = "lv5" | "lv6" | "lv7" | "lv8";
export type LevelType = { [key in Level]: [number, number] };
type CharacterName = (typeof CHARACTERS)[number]["name"];
// "dj": { lv5: [0,0], lv6: [0,0], lv7: [0,0], lv8: [0,0] },
export type CharacterType = { [key in CharacterName]: LevelType };
export type SelectedCharacterType = CharacterType;
export type RecordType = {
  id: number;
  [key: string]: CharacterType | number;
};

export function initRecords() {
  let records: RecordType[] = [];

  for (const charMain of CHARACTERS) {
    let characterRecord: CharacterType = {} as CharacterType;

    for (const charEnemy of CHARACTERS) {
      characterRecord[charEnemy.name] = {
        lv5: [0, 0],
        lv6: [0, 0],
        lv7: [0, 0],
        lv8: [0, 0],
      };
    }

    records.push({
      id: charMain.id,
      [charMain.name]: characterRecord,
    });
  }

  return records;
}
