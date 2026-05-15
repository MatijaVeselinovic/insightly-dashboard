import { Card } from '../Card/Card';
import { useMoodContext } from '../../context/MoodContext';
import { MOOD_OPTIONS } from '../../utils/moodScore';
import styles from './MoodTracker.module.css';
import { getTodayDate } from '../../utils/dates';

export function MoodTracker() {
  const { addMoodEntry, moodEntries } = useMoodContext();

  const todayEntry = moodEntries.find(entry => entry.date === getTodayDate());
  const selectedMood = todayEntry?.mood;

  return (
    <Card>
      <h2 className={styles.title}>How are you feeling today?</h2>
      <p className={styles.description}>
        Choose one mood. Today's previous entry will be updated.
      </p>

      <div className={styles.options} role="group" aria-label="Mood options">
        {MOOD_OPTIONS.map((option) => {
          const isActive = selectedMood === option.value;

          return (
          <button
            key={option.value}
            className={`${styles.option} ${isActive ? styles.activeMoodOption : ''}`}
            type="button"
            aria-label={`Log ${option.label.toLowerCase()} mood`}
            onClick={() => addMoodEntry(option.value)}
          >
            <span className={styles.icon} aria-hidden="true">
              {option.icon}
            </span>
            <span className={styles.label}>{option.label}</span>
          </button>
        )})}
      </div>
    </Card>
  );
}
