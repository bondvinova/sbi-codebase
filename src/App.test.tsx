// import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { create } from 'react-test-renderer';
import { describe, expect, it } from 'vitest';

import Login from '@/features/authentication/login';

describe('App', () => {
  it('renders correctly', () => {
    const renderer = create(
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </MemoryRouter>
    );

    expect(renderer.toJSON()).toMatchSnapshot();
  });
});
