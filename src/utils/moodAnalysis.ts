import type { MoodEntry } from '../types';

export const MOOD_MESSAGES = {
  improving: 'Your mood has been improving over the past few days!',
  declining: "It seems like you've been feeling a bit down. Hang in there!",
  fluctuating: 'Your mood has been varying lately. Try finding balance!',
  notEnoughData: 'Log your mood for a few days to unlock better insights.',
} as const;

export const getAverageScore = (entries: MoodEntry[]): number => {
  if (!entries.length) {
    return 0;
  }

  const total = entries.reduce((sum, entry) => sum + entry.score, 0);

  return total / entries.length;
};

export const getMoodTrendMessage = (entries: MoodEntry[]): string => {
  if (entries.length < 3) {
    return MOOD_MESSAGES.notEnoughData;
  }

  const recentEntries = entries.slice(-7);
  const previousEntries = recentEntries.slice(0, -1);
  const todayEntry = recentEntries[recentEntries.length - 1];

  const previousAverage = getAverageScore(previousEntries);

  if (todayEntry.score > previousAverage) {
    return MOOD_MESSAGES.improving;
  }

  if (todayEntry.score < previousAverage) {
    return MOOD_MESSAGES.declining;
  }

  return MOOD_MESSAGES.fluctuating;
};
