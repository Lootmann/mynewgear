import { CHARACTERS_NAME } from "../global/characters";

export type LevelType = "lv5" | "lv6" | "lv7" | "lv8";
export type LevelDataType = {
  [key in LevelType]: [number, number];
};

export type CharacterNameType = (typeof CHARACTERS_NAME)[number];

export type CharacterRecordType = {
  [opponent in CharacterNameType]?: LevelDataType;
};

export type RecordType = {
  [char in CharacterNameType]?: CharacterRecordType;
};
