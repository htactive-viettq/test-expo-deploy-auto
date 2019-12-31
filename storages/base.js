import { AsyncStorage } from "react-native";

async function save(key, value) {
  await AsyncStorage.setItem(key, value);
}

async function get(key) {
  return await AsyncStorage.getItem(key);
}

async function destroy(key) {
  await AsyncStorage.removeItem(key);
}

export { save, get, destroy };
