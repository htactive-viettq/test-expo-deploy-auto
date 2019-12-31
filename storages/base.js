import { AsyncStorage } from "react-native";

async function save(key, value) {
  const jsonValue = value ? JSON.stringify(value) : null;
  await AsyncStorage.setItem(key, jsonValue);
}

async function get(key) {
  const jsonValue = await AsyncStorage.getItem(key);
  if (jsonValue) return JSON.parse(jsonValue);
  return null;
}

async function destroy(key) {
  await AsyncStorage.removeItem(key);
}

export { save, get, destroy };
