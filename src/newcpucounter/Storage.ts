import { initRecords, RecordType } from "./Records";

export function loadStorage(storage_id: string) {
  const storedData = localStorage.getItem(storage_id);

  if (storedData === null) {
    const record = initRecords();
    localStorage.setItem(storage_id, JSON.stringify(record));
    return record;
  } else {
    return JSON.parse(storedData) as RecordType[];
  }
}
