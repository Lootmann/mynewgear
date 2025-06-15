import { CPUCounterType } from "../types/cpucounter";

export const STORAGE_ID = "my-awesome-cpu-counter";

// get CPUCounter date from localstorage
export const loadCPUCounterData = (storageId: string): CPUCounterType[] => {
  const raw = localStorage.getItem(storageId) ?? "[]";
  return JSON.parse(raw) as CPUCounterType[];
};

// save CPUCounter data to localstorage
export const saveCPUCounterData = (
  data: CPUCounterType[],
  storageId: string
) => {
  console.log("save!");
  localStorage.setItem(storageId, JSON.stringify(data));
};
