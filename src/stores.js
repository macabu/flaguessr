import { writable } from 'svelte/store';

export const score = writable(0);
export const country = writable({flag: '', aliases: []});
export const paused = writable(false);
export const gameStarted = writable(false);
export const timerSeconds = writable(10);
export const countriesLoaded = writable(false);
export const randomizedCountries = writable([]);