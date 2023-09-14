import { render, screen } from '@testing-library/react';
import { HomePage } from './HomePage';

describe('HomePage component', () => {
  it('has correct Next.js theming section link', () => {
    render(<HomePage />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/'
    );
  });
});
