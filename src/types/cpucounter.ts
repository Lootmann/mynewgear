export type CPUCounterType = {
  id: number;
  characterName: string;
  ranks: RankType[];
};

export type RankType = {
  key: string;
  rank: number[];
};
