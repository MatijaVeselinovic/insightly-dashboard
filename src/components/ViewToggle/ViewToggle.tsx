import type { ChartRange } from '../../types';
import styles from './ViewToggle.module.css';

interface ViewToggleProps {
  selectedRange: ChartRange;
  onChange: (range: ChartRange) => void;
}

const ranges: Array<{ label: string; value: ChartRange }> = [
  { label: 'Daily', value: 'daily' },
  { label: 'Weekly', value: 'weekly' },
  { label: 'Monthly', value: 'monthly' },
];

export function ViewToggle({ selectedRange, onChange }: ViewToggleProps) {
  return (
    <div className={styles.header}>
      <h2 className={styles.title}>Mood trends</h2>
      <div className={styles.controls} role="group" aria-label="Chart range">
        {ranges.map((range) => (
          <button
            key={range.value}
            type="button"
            className={`${styles.button} ${selectedRange === range.value ? styles.active : ''}`}
            aria-pressed={selectedRange === range.value}
            onClick={() => onChange(range.value)}
          >
            {range.label}
          </button>
        ))}
      </div>
    </div>
  );
}
