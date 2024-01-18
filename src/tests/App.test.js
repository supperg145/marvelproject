import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/';
import App from '../App';
import Navbar from '../components/Navbar';


test('renders the landing page', () => {
  render(<App />);
  
});

test('renders Navbar component with the correct role and navigation item', () => {
    render(<Navbar />);
  
    // Check if the nav element has the correct role
    const navElement = screen.getByRole('navigation');
    expect(navElement).toBeInTheDocument();
  
    // Check if the "Home" navigation item is present
    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();
  });

