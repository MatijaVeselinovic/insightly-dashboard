import type { MoodLevel } from '../types';

export const MOOD_OPTIONS: Array<{ label: string; value: MoodLevel; score: number; icon: string }> =
  [
    { label: 'Happy', value: 'happy', score: 3, icon: '😊' },
    { label: 'Neutral', value: 'neutral', score: 2, icon: '😐' },
    { label: 'Sad', value: 'sad', score: 1, icon: '😔' },
  ];

export function getMoodScore(mood: MoodLevel): number {
  return MOOD_OPTIONS.find((option) => option.value === mood)?.score ?? 2;
}

export function calculateAverageMoodScore(scores: number[]): number {
  if (!scores.length) {
    return 0;
  }

  const total = scores.reduce((sum, score) => sum + score, 0);
  return Number((total / scores.length).toFixed(1));
}
