
import type { MoodEntry } from '../types';

export function formatShortDate(date: string): string {
  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
  }).format(new Date(`${date}T00:00:00`));
}

export function getLastEntries(entries: MoodEntry[], count: number): MoodEntry[] {
  return [...entries].sort((a, b) => a.date.localeCompare(b.date)).slice(-count);
}

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export const getTodayDate = (): string => {
  return formatDate(new Date());
};

export const subtractDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
};
