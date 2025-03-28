import { writable } from "svelte/store";

// Load user from localStorage (if available) to persist login
const storedUser = localStorage.getItem("user");
export const user = writable(storedUser ? JSON.parse(storedUser) : null);

// Subscribe to store and update localStorage when user changes
user.subscribe((value) => {
  if (value) {
    localStorage.setItem("user", JSON.stringify(value));
  } else {
    localStorage.removeItem("user");
  }
});
