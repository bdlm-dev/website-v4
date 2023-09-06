import { writable } from 'svelte/store';

export const navOpen = writable(false);
export const transitioning = writable(false);