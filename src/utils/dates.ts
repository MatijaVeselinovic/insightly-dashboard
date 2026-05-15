import type { MoodEntry } from '../types';

export function getTodayIsoDate(): string {
  return new Date().toISOString().slice(0, 10);
}

export function formatShortDate(date: string): string {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
  }).format(new Date(`${date}T00:00:00`));
}

export function getLastEntries(entries: MoodEntry[], count: number): MoodEntry[] {
  return [...entries].sort((a, b) => a.date.localeCompare(b.date)).slice(-count);
}
