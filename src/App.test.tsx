import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import App from '@/App';

describe('App', () => {
  it('Render Hello World', () => {
    render(<App />);

    expect(screen.getByRole('button', { name: /button/i })).toBeInTheDocument();
  });

  it.fails('Not render Hello World', () => {
    render(<App />);

    expect(screen.getByText(/hello world/i)).toBeInTheDocument();
  });
});
