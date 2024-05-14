const { add, subtract } = require('./index.js');

// En test suite med ett eller flera testfall
describe('Mathematical operations', () => {
  //Strängen nedan förklarar vad testet ska göra och det förväntade resultatet
  //Funktionen efter är det som kör testet
  it('should add two numbers together and return the sum', () => {
    // Arrange
    const expected = 10; // Värdet som vi förväntar oss tillbaka

    // Act
    const actual = add(5, 5);

    // Assert
    expect(actual).toBe(expected);
  });

  it('should subtract two numbers and return the sum', () => {
    // Arrange
    const expected = 2; // Värdet som vi förväntar oss tillbaka

    // Act
    const actual = subtract(5, 3);

    // Assert
    expect(actual).toBe(expected);
  });
});
