import { describe, expect, it } from 'vitest';
import { getAverageScore, getMoodTrendMessage, MOOD_MESSAGES } from '../utils/moodAnalysis';
import type { MoodEntry } from '../types';

const createEntries = (scores: number[]): MoodEntry[] =>
  scores.map((score, index) => ({
    date: `2026-05-${String(index + 1).padStart(2, '0')}`,
    mood: score === 3 ? 'happy' : score === 2 ? 'neutral' : 'sad',
    score,
  }));

describe('getMoodAnalysisMessage', () => {
  it('returns improving message when today is above the previous average', () => {
    const entries = createEntries([1, 1, 2, 2, 3, 3, 3]);

    expect(getMoodTrendMessage(entries)).toBe(MOOD_MESSAGES.improving);
  });

  it('returns declining message when today is below the previous average', () => {
    const entries = createEntries([1, 1, 2, 2, 3, 3, 1]);

    expect(getMoodTrendMessage(entries)).toBe(MOOD_MESSAGES.declining);
  });

  it('returns fluctuating message when today equals the previous average', () => {
    const entries = createEntries([1, 1, 2, 2, 3, 3, 2]);

    expect(getMoodTrendMessage(entries)).toBe(MOOD_MESSAGES.fluctuating);
  });

  it('returns no enough date message when there is not enough entries', () => {
    const entries = createEntries([1, 2]);

    expect(getMoodTrendMessage(entries)).toBe(MOOD_MESSAGES.notEnoughData);
  });

  it('returns 0 when calculating average score for empty entries', () => {
    expect(getAverageScore([])).toBe(0);
  });
});
