import { MoodProvider } from '../context/MoodContext';
import { ThemeProvider } from '../context/ThemeContext';
import { InsightlyDashboard } from '../pages/InsightlyDashboard/InsightlyDashboard';

export function App() {
  return (
    <ThemeProvider>
      <MoodProvider>
        <InsightlyDashboard />
      </MoodProvider>
    </ThemeProvider>
  );
}
