import { render, screen } from '@testing-library/react';
import SuperHeroesPage from './page';

describe('SuperHeroesPage', () => {
  it('renders the title and hero list', () => {
    render(<SuperHeroesPage />);

    // Vérifie le titre
    expect(screen.getByRole('heading', { name: /super heroes/i })).toBeInTheDocument();

    // Vérifie les héros
    expect(screen.getByText(/Superman/i)).toBeInTheDocument();
    expect(screen.getByText(/Batman/i)).toBeInTheDocument();
    expect(screen.getByText(/Wonder Woman/i)).toBeInTheDocument();
    expect(screen.getByText(/Spider-Man/i)).toBeInTheDocument();
    expect(screen.getByText(/Iron Man/i)).toBeInTheDocument();
    expect(screen.getByText(/Hulk/i)).toBeInTheDocument();
  });
});
