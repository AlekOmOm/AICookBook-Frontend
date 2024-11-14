import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import App from '../../App';


describe('App component', () => {
  it('should render App component', () => {
    render(<App />);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });
});