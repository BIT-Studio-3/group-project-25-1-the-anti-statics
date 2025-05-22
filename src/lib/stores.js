import { writable } from 'svelte/store';

export const selectedAgency = writable('All');

export let address = writable('');