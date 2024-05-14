// Övning 1
function multiply(numberOne, numberTwo) {
  if (typeof numberOne !== 'number' || typeof numberTwo !== 'number')
    return 'Ej tillåtet värde';

  const sum = numberOne * numberTwo;

  return sum;
}

// Övning 2
function capitalize(text) {
  if (text === '') return 'Ej tillåtet värde';

  return text.charAt(0).toUpperCase() + text.slice(1);
}

// Övning 3
function intToRoman(number) {
  if (typeof number !== 'number' || number <= 0 || number > 14) {
    return 'Ej tillåtet värde';
  }

  const numerals = {
    14: 'XIV',
    13: 'XIII',
    12: 'XII',
    11: 'XI',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    3: 'III',
    2: 'II',
    1: 'I',
  };

  return numerals[number];
}

module.exports = { multiply, capitalize, intToRoman };
