import { Card } from '../Card/Card';
import styles from './DashboardSummary.module.css';

interface DashboardSummaryProps {
  tasksCompleted: number;
  moodScore: number;
}

export function DashboardSummary({ tasksCompleted, moodScore }: DashboardSummaryProps) {
  return (
    <Card>
      <section className={styles.grid} aria-label="Daily insights summary">
        <article className={styles.metric}>
          <span className={styles.icon} aria-hidden="true">
            ✅
          </span>
          <p className={styles.label}>Tasks completed</p>
          <p className={styles.value}>{tasksCompleted}</p>
        </article>

        <article className={styles.metric}>
          <span className={styles.icon} aria-hidden="true">
            ✨
          </span>
          <p className={styles.label}>Mood score</p>
          <p className={styles.value}>{moodScore}</p>
        </article>
      </section>
    </Card>
  );
}
