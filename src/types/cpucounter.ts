export type CPUCounterType = {
  id: number;
  characterName: string;
  ranks: RankType[];
};

export type RankType = {
  key: string;
  rank: number[]; // rank [0, 0] means Me wins and CPU wins
};
