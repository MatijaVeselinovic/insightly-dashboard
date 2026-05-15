import { formatShortDate, getLastEntries } from './dates';
import type { ChartPoint, ChartRange, MoodEntry } from '../types';

const weeklyDummyData: ChartPoint[] = [
  { label: 'Week 1', score: 1.8 },
  { label: 'Week 2', score: 2.1 },
  { label: 'Week 3', score: 2.4 },
  { label: 'Week 4', score: 2.7 },
];

const monthlyDummyData: ChartPoint[] = [
  { label: 'Jan', score: 2.1 },
  { label: 'Feb', score: 2.4 },
  { label: 'Mar', score: 2.2 },
  { label: 'Apr', score: 2.6 },
  { label: 'May', score: 2.8 },
];

export function getChartData(entries: MoodEntry[], range: ChartRange): ChartPoint[] {
  if (range === 'weekly') {
    return weeklyDummyData;
  }

  if (range === 'monthly') {
    return monthlyDummyData;
  }

  return getLastEntries(entries, 7).map((entry) => ({
    label: formatShortDate(entry.date),
    score: entry.score,
  }));
}
