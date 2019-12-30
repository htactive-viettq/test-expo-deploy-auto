import { save, destroy, get } from "./base";

async function saveStore(Store) {
  save("Store", Store);
}

async function getStore() {
  return await get("Store");
}

async function destroyStore() {
  destroy("Store");
}

export { saveStore, destroyStore, getStore };
