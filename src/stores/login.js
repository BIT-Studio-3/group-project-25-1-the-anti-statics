import { derived } from "svelte/store";
import user from "./user.js";

export const login = derived(user, ($user) => $user !== null);