import { writable } from "svelte/store";

const isDarkStored = typeof localStorage !== 'undefined'
  ? localStorage.getItem("theme") === "dark"
  : false;

export const isDark = writable(isDarkStored);

isDark.subscribe(value => {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem("theme", value ? "dark" : "light");
    document.documentElement.classList.toggle("dark", value);
    document.body.classList.toggle("dark", value);
  }
});
