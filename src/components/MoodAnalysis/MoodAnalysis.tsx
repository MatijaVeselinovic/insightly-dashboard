import { Card } from '../Card/Card';
import styles from './MoodAnalysis.module.css';

interface MoodAnalysisProps {
  message: string;
  entriesCount: number;
}

export function MoodAnalysis({ message, entriesCount }: MoodAnalysisProps) {
  return (
    <Card>
      <section className={styles.wrapper} aria-label="Mood analysis insight">
        <span className={styles.icon} aria-hidden="true">
          💡
        </span>
        <div>
          <h2 className={styles.title}>Insight</h2>
          <p className={styles.message}>{message}</p>
          <p className={styles.info}>Based on {entriesCount} recent mood entries.</p>
        </div>
      </section>
    </Card>
  );
}
