import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { ChartPoint } from '../../types';
import styles from './MoodChart.module.css';

interface MoodChartProps {
  data: ChartPoint[];
}

export default function MoodChart({ data }: MoodChartProps) {
  return (
    <>
      <p className={styles.legend}>Mood score scale: Sad = 1, Neutral = 2, Happy = 3.</p>
      <div className={styles.chart} aria-label="Mood trend chart">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 16, right: 16, bottom: 8, left: -20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis domain={[1, 3]} ticks={[1, 2, 3]} />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="score"
              stroke="var(--color-accent)"
              strokeWidth={3}
              dot
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}
