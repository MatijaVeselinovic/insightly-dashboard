import { createContext, ReactNode, useCallback, useContext, useMemo, useReducer } from 'react';
import { mockMoodData } from '../data/mockMoodData';
import { getTodayIsoDate } from '../utils/dates';
import { getStoredMoodEntries, storeMoodEntries } from '../utils/storage';
import { getMoodScore } from '../utils/moodScore';
import type { ChartRange, MoodEntry, MoodLevel } from '../types';

interface MoodState {
  moodEntries: MoodEntry[];
  selectedRange: ChartRange;
}

type MoodAction =
  | { type: 'ADD_MOOD_ENTRY'; payload: MoodEntry }
  | { type: 'SET_SELECTED_RANGE'; payload: ChartRange };

interface MoodContextValue extends MoodState {
  addMoodEntry: (mood: MoodLevel) => void;
  setSelectedRange: (range: ChartRange) => void;
}

const MoodContext = createContext<MoodContextValue | null>(null);

function moodReducer(state: MoodState, action: MoodAction): MoodState {
  switch (action.type) {
    case 'ADD_MOOD_ENTRY': {
      const withoutToday = state.moodEntries.filter((entry) => entry.date !== action.payload.date);
      const moodEntries = [...withoutToday, action.payload].sort((a, b) =>
        a.date.localeCompare(b.date),
      );
      storeMoodEntries(moodEntries);

      return {
        ...state,
        moodEntries,
      };
    }

    case 'SET_SELECTED_RANGE':
      return {
        ...state,
        selectedRange: action.payload,
      };

    default:
      return state;
  }
}

const initialState: MoodState = {
  moodEntries: getStoredMoodEntries() ?? mockMoodData,
  selectedRange: 'daily',
};

export function MoodProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(moodReducer, initialState);

  const addMoodEntry = useCallback((mood: MoodLevel) => {
    dispatch({
      type: 'ADD_MOOD_ENTRY',
      payload: {
        date: getTodayIsoDate(),
        mood,
        score: getMoodScore(mood),
      },
    });
  }, []);

  const setSelectedRange = useCallback((range: ChartRange) => {
    dispatch({ type: 'SET_SELECTED_RANGE', payload: range });
  }, []);

  const value = useMemo<MoodContextValue>(
    () => ({
      ...state,
      addMoodEntry,
      setSelectedRange,
    }),
    [state, addMoodEntry, setSelectedRange],
  );

  return <MoodContext.Provider value={value}>{children}</MoodContext.Provider>;
}

export function useMoodContext() {
  const context = useContext(MoodContext);

  if (!context) {
    throw new Error('useMoodContext must be used within MoodProvider');
  }

  return context;
}
