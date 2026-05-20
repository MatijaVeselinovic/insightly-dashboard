import type { MoodEntry, MoodLevel } from '../types';
import { formatDate, subtractDays } from '../utils/dates';

const moodToScore: Record<MoodLevel, number> = {
  sad: 1,
  neutral: 2,
  happy: 3,
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
