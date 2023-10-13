import * as secureStorage from "expo-secure-store";

export async function saveItem(key, value) {
  await secureStorage.setItemAsync(key, value);
}

export async function getItem(key) {
  return await secureStorage.getItemAsync(key);
}

export async function deleteItem(key) {
  await secureStorage.deleteItemAsync(key);
}

export async function clear() {
  await secureStorage.deleteAllAsync();
}