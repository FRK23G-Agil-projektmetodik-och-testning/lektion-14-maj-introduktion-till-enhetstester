const { multiply, capitalize, intToRoman } = require('./index.js');

describe('Jest bootcamp', () => {
  // Övning 1
  it('should return the sum of two numbers', () => {
    // Arrange
    const expected = 25;

    // Act
    const actual = multiply(5, 5);

    // Assert
    expect(actual).toBe(expected);
  });

  it('should return error if illegal value', () => {
    // Arrange
    const expected = 'Ej tillåtet värde';

    // Act
    const actual = multiply('Test', 5);

    // Assert
    expect(actual).toBe(expected);
  });

  it('should return error if illegal value', () => {
    // Arrange
    const expected = 'Ej tillåtet värde';

    // Act
    const actual = multiply(5, 'Test');

    // Assert
    expect(actual).toBe(expected);
  });

  // Övning 2
  it('should capitalize the first letter', () => {
    // Arrange
    const expected = 'Ada';

    // Act
    const actual = capitalize('ada');

    // Assert
    expect(actual).toBe(expected);
  });

  it('should return error if empty string', () => {
    // Arrange
    const expected = 'Ej tillåtet värde';

    // Act
    const actual = capitalize('');

    // Assert
    expect(actual).toBe(expected);
  });

  // Övning 3
  it('should return the roman numerial of number', () => {
    // Arrange
    const expected = 'IX';

    // Act
    const actual = intToRoman(9);

    // Assert
    expect(actual).toBe(expected);
  });
  it('should return error if illegal value', () => {
    // Arrange
    const expected = 'Ej tillåtet värde';

    // Act
    const actual = intToRoman('Hej');

    // Assert
    expect(actual).toBe(expected);
  });

  it('should return error if to low value', () => {
    // Arrange
    const expected = 'Ej tillåtet värde';

    // Act
    const actual = intToRoman(-1);

    // Assert
    expect(actual).toBe(expected);
  });

  it('should return error if to high value', () => {
    // Arrange
    const expected = 'Ej tillåtet värde';

    // Act
    const actual = intToRoman(20);

    // Assert
    expect(actual).toBe(expected);
  });
});
