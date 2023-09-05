import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Spinner } from '@/components/spinner';

describe('Spinner component', () => {
  it('Should render and match the snapshot', () => {
    const { baseElement } = render(<Spinner />);

    expect(baseElement).toMatchSnapshot();
  });
});
