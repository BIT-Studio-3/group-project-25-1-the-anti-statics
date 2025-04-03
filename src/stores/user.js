import { writable } from "svelte/store";
import { browser } from "$app/environment";

const user = writable(browser && localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null);

//Keeps track of the localStorage value so it is synced across webpages
if (browser) {
  user.subscribe(value => {
    if (value) {
      localStorage.setItem("user", JSON.stringify(value));
    } else {
      localStorage.removeItem("user");
    }
  });
}

export default user;
