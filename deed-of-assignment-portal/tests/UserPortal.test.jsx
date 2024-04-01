import { render, screen } from '@testing-library/react';
import UserPortal from './UserPortal';

test('renders user portal', () => {
  render(<UserPortal />);
  expect(screen.getByText(/user portal/i)).toBeInTheDocument();
});