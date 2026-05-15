import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { DashboardSummary } from '../components/DashboardSummary/DashboardSummary';

describe('DashboardSummary', () => {
  it('renders tasks completed and mood score values', () => {
    const { getByText } = render(<DashboardSummary tasksCompleted={6} moodScore={2.4} />);

    expect(getByText('Tasks completed')).toBeInTheDocument();
    expect(getByText('Mood score')).toBeInTheDocument();
    expect(getByText('6')).toBeInTheDocument();
    expect(getByText('2.4')).toBeInTheDocument();
  });
});
