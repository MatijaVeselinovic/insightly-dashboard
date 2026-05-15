import type { MoodEntry } from '../types';

const STORAGE_KEY = 'insightly-mood-entries';

export function getStoredMoodEntries(): MoodEntry[] | null {
  try {
    const rawEntries = localStorage.getItem(STORAGE_KEY);

    if (!rawEntries) {
      return null;
    }

    const parsedEntries = JSON.parse(rawEntries) as MoodEntry[];

    if (!Array.isArray(parsedEntries)) {
      return null;
    }

    return parsedEntries;
  } catch {
    return null;
  }
}

export function storeMoodEntries(entries: MoodEntry[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  } catch {
    // Local storage can fail in private mode or locked-down browsers.
  }
}
