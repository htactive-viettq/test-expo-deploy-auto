import { save, destroy, get } from "./base";

async function saveStore(Store) {
  await save("Store", Store);
}

async function getStore() {
  return await get("Store");
}

async function destroyStore() {
  await destroy("Store");
}

export { saveStore, destroyStore, getStore };
