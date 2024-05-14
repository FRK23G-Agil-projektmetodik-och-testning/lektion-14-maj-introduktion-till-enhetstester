import { act, render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('should increase count by 1', () => {
    // Arrange
    render(<App />); // Rendera vår komponent
    //Act
    const buttonElem = screen.getByRole('button'); // Hämtar första elememtet som är en button
    act(() => {
      buttonElem.click(); // Klickar på knappen
    });

    screen.debug(); // Visar HTML:en från komponenten i terminalen
    //Assert
    const countElem = screen.getByTestId('count');
    expect(countElem).toHaveTextContent(/^count is 1$/); // Här kollar vi att count har ökat med 1
  });
});
