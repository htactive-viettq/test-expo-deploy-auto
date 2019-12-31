import { save, destroy, get } from "./base";

async function saveUser(user) {
  await save("User", user);
}

async function getUser() {
  return await get("User");
}

async function destroyUser() {
  await destroy("User");
}

export { saveUser, destroyUser, getUser };
