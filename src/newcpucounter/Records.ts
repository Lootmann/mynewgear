import { CHARACTERS } from "../global/characters";
import {
  CharacterNameType,
  CharacterRecordType,
  RecordType,
} from "../types/record";

export function initRecords(): RecordType {
  let records: RecordType = {};

  for (const charMain of CHARACTERS) {
    let characterRecord: CharacterRecordType = {} as CharacterRecordType;
    for (const charEnemy of CHARACTERS) {
      characterRecord[charEnemy.name] = {
        lv5: [0, 0],
        lv6: [0, 0],
        lv7: [0, 0],
        lv8: [0, 0],
      };
    }
    records[charMain.name] = characterRecord;
  }

  return records;
}

export function CharNameFindByid(charId: number): CharacterNameType {
  const char = CHARACTERS.find((char) => char.id == charId);
  if (!char) return "aki";
  else return char.name;
}
