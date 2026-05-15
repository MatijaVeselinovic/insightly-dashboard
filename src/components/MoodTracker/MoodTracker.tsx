import { Card } from '../Card/Card';
import { useMoodContext } from '../../context/MoodContext';
import { MOOD_OPTIONS } from '../../utils/moodScore';
import styles from './MoodTracker.module.css';

export function MoodTracker() {
  const { addMoodEntry } = useMoodContext();

  return (
    <Card>
      <h2 className={styles.title}>How are you feeling today?</h2>
      <p className={styles.description}>
        Choose one mood. Today's previous entry will be updated.
      </p>

      <div className={styles.options} role="group" aria-label="Mood options">
        {MOOD_OPTIONS.map((option) => (
          <button
            key={option.value}
            className={styles.option}
            type="button"
            aria-label={`Log ${option.label.toLowerCase()} mood`}
            onClick={() => addMoodEntry(option.value)}
          >
            <span className={styles.icon} aria-hidden="true">
              {option.icon}
            </span>
            <span className={styles.label}>{option.label}</span>
          </button>
        ))}
      </div>
    </Card>
  );
}
