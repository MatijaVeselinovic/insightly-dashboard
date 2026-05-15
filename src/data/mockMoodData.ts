import type { MoodEntry, MoodLevel } from '../types';

const moodToScore: Record<MoodLevel, number> = {
  sad: 1,
  neutral: 2,
  happy: 3,
};

const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

const subtractDays = (date: Date, days: number): Date => {
  const result = new Date(date);
  result.setDate(result.getDate() - days);
  return result;
};

export const createMockMoodData = (): MoodEntry[] => {
  const today = new Date();

  const moods: MoodLevel[] = ['sad', 'sad', 'neutral', 'neutral', 'happy', 'happy', 'neutral'];

  return moods.map((mood, index) => {
    const daysAgo = moods.length - 1 - index;
    const date = subtractDays(today, daysAgo);

    return {
      date: formatDate(date),
      mood,
      score: moodToScore[mood],
    };
  });
};

export const mockMoodData: MoodEntry[] = createMockMoodData();
