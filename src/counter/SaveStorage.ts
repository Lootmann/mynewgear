import { CounterType } from "../types/counter";

// get counter date from localstorage
export const getCounterData = (storageId: string) => {
  const raw = localStorage.getItem(storageId) ?? "[]";
  return JSON.parse(raw);
};

// save counter data to localstorage
export const saveCounterData = (data: CounterType[], storageId: string) => {
  console.log("save!");
  localStorage.setItem(storageId, JSON.stringify(data));
};
