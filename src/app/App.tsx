import { Suspense, lazy, useMemo } from 'react';
import { DashboardSummary } from '../components/DashboardSummary/DashboardSummary';
import { MoodAnalysis } from '../components/MoodAnalysis/MoodAnalysis';
import { MoodTracker } from '../components/MoodTracker/MoodTracker';
import { ViewToggle } from '../components/ViewToggle/ViewToggle';
import { Card } from '../components/Card/Card';
import { MoodProvider, useMoodContext } from '../context/MoodContext';
import { ThemeProvider, useThemeContext } from '../context/ThemeContext';
import { useMoodStats } from '../hooks/useMoodStats';
import { getRandomTasksCompleted } from '../utils/tasks';
import styles from './App.module.css';

const MoodChart = lazy(() => import('../components/MoodChart/MoodChart'));

function InsightlyDashboard() {
  const { moodEntries, selectedRange, setSelectedRange } = useMoodContext();
  const { theme, toggleTheme } = useThemeContext();
  const stats = useMoodStats(moodEntries, selectedRange);
  const tasksCompleted = useMemo(() => getRandomTasksCompleted(), []);

  return (
    <main className={styles.main} data-theme={theme}>
      <header className={styles.header}>
        <div>
          <h1 className={styles.title}>Insightly</h1>
          <p className={styles.subtitle}>
            Track your daily mood and spot simple patterns before they become easy to miss.
          </p>
        </div>

        <button className={styles.themeButton} type="button" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark mode' : '☀️ Light mode'}
        </button>
      </header>

      <section className={styles.grid} aria-label="Mood dashboard">
        <div className={styles.leftColumn}>
          <DashboardSummary tasksCompleted={tasksCompleted} moodScore={stats.averageMoodScore} />
          <MoodTracker />
          <MoodAnalysis message={stats.analysisMessage} entriesCount={stats.lastSevenDays.length} />
        </div>

        <div className={styles.rightColumn}>
          <Card>
            <ViewToggle selectedRange={selectedRange} onChange={setSelectedRange} />
            <Suspense fallback={<p>Loading mood chart...</p>}>
              <MoodChart data={stats.chartData} />
            </Suspense>
          </Card>
        </div>
      </section>
    </main>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <MoodProvider>
        <InsightlyDashboard />
      </MoodProvider>
    </ThemeProvider>
  );
}
