import { render, screen } from '@testing-library/react';
import HeroPage from './page';

describe('HeroPage', () => {
  it('renders hero details when found', () => {
    render(<HeroPage params={{ id: '1' }} />);
    expect(screen.getByText(/Superman/i)).toBeInTheDocument();
    expect(screen.getByText(/Super force/i)).toBeInTheDocument();
    expect(screen.getByText(/vol/i)).toBeInTheDocument();
    expect(screen.getByText(/vision laser/i)).toBeInTheDocument();
  });

  it('renders not found message when hero does not exist', () => {
    render(<HeroPage params={{ id: '999' }} />);
    expect(screen.getByText(/Hero not found/i)).toBeInTheDocument();
  });
});
