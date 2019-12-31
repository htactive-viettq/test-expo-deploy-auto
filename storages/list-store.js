import { save, destroy, get } from "./base";

async function saveListStore(ListStore) {
  await save("ListStore", ListStore);
}

async function getListStore() {
  return await get("ListStore");
}

async function destroyListStore() {
  await destroy("ListStore");
}

export { saveListStore, destroyListStore, getListStore };
