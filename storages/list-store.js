import { save, destroy, get } from "./base";

async function saveListStore(ListStore) {
  save("ListStore", ListStore);
}

async function getListStore() {
  return await get("ListStore");
}

async function destroyListStore() {
  destroy("ListStore");
}

export { saveListStore, destroyListStore, getListStore };
