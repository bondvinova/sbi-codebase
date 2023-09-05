import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { Button } from '@/components/button';

describe('Button component', () => {
  it('Should render and match the snapshot', () => {
    const { baseElement } = render(<Button>Button</Button>);

    expect(baseElement).toMatchSnapshot();
  });

  it('Should render correct ui with different props', () => {
    render(
      <Button variant="primary" size="sm">
        Button
      </Button>
    );

    const result = screen.getByRole('button', { name: /Button/i });

    expect(result).toBeInTheDocument();
    expect(result).toHaveClass('bg-purple-400 text-gray-400');
    expect(result).toHaveClass('h-8 px-3 py-2');
  });

  it('Should render correct type of component with asChild prop', () => {
    render(
      <Button asChild>
        <a href="/">Link</a>
      </Button>
    );

    const result = screen.getByRole('link', { name: /Link/i });
    const button = screen.queryByRole('button', { name: /Link/i });

    expect(result).toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
  });

  it('Should call the prop onClick when the clickable component is clicked', async () => {
    const handleDownload = vi.fn();
    render(<Button onClick={handleDownload}>Download</Button>);

    const button = screen.getByRole('button', { name: /Download/i });
    await userEvent.click(button);

    expect(handleDownload).toBeCalled();
  });
});
