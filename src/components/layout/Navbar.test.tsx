import { render, screen } from '@testing-library/react';
import Navbar from '@/components/layout/Navbar';

describe('Navbar', () => {
  it('renders name and links', () => {
    render(<Navbar />);
    expect(screen.getByText('Awaneesh')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
    expect(screen.getByText('Experience')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
