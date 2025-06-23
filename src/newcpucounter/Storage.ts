import { RecordType } from "../types/record";
import { initRecords } from "./Records";

export function saveStorage(storage_id: string, record: RecordType) {
  localStorage.setItem(storage_id, JSON.stringify(record));
}

export function loadStorage(storage_id: string) {
  const storedData = localStorage.getItem(storage_id);

  if (storedData === null) {
    const record = initRecords();
    saveStorage(storage_id, record);
    return record;
  } else {
    return JSON.parse(storedData) as RecordType;
  }
}
