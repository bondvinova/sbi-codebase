import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Label from '@/components/label';

describe('Label component', () => {
  it('Should render and match the snapshot', () => {
    const { baseElement } = render(<Label>Label</Label>);

    expect(baseElement).toMatchSnapshot();
  });

  it('Should render correct ui with different props', () => {
    render(
      <Label variant="select" size="base" htmlFor="Username">
        Label
      </Label>
    );

    const result = screen.getByText('Label');

    expect(result).toBeInTheDocument();
    expect(result).toHaveClass('text-grey-slate-110');
    expect(result).toHaveClass('text-base leading-6');
  });
});
