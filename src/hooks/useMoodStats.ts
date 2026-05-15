import { useMemo } from 'react';
import { getChartData } from '../utils/chartData';
import { getLastEntries } from '../utils/dates';
import { getMoodTrendMessage } from '../utils/moodAnalysis';
import { calculateAverageMoodScore } from '../utils/moodScore';
import type { ChartRange, MoodEntry } from '../types';

export function useMoodStats(entries: MoodEntry[], selectedRange: ChartRange) {
  return useMemo(() => {
    const lastSevenDays = getLastEntries(entries, 7);
    const scores = lastSevenDays.map((entry) => entry.score);

    return {
      lastSevenDays,
      averageMoodScore: calculateAverageMoodScore(scores),
      analysisMessage: getMoodTrendMessage(lastSevenDays),
      chartData: getChartData(entries, selectedRange),
    };
  }, [entries, selectedRange]);
}
