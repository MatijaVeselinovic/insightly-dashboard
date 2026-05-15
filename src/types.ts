export type MoodLevel = 'happy' | 'neutral' | 'sad';
export type ChartRange = 'daily' | 'weekly' | 'monthly';
export type ThemeMode = 'light' | 'dark';

export interface MoodEntry {
  date: string;
  mood: MoodLevel;
  score: number;
}

export interface ChartPoint {
  label: string;
  score: number;
}
