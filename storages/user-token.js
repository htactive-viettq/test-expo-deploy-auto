import { save, destroy, get } from "./base";

async function saveUser(user) {
  save("User", user);
}

async function getUser() {
  get("User");
}

async function destroyUser() {
  destroy("User");
}

export { saveUser, destroyUser, getUser };
