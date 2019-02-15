import { shiftLetter } from '../../lib/util';

test('Shift the letter "A" by 1', () => {
  const letter = 'A';
  const shift = 1;
  const shifted = shiftLetter(letter, shift);
  const actualShifted = 'B';

  expect(shifted).toEqual(actualShifted);
});

test('Shift the letter "A" by 7', () => {
  const letter = 'A';
  const shift = 7;
  const shifted = shiftLetter(letter, shift);
  const actualShifted = 'H';

  expect(shifted).toEqual(actualShifted);
});

test('Shift the letter "A" by 13', () => {
  const letter = 'A';
  const shift = 13;
  const shifted = shiftLetter(letter, shift);
  const actualShifted = 'N';

  expect(shifted).toEqual(actualShifted);
});

test('Shift the letter "A" by 20', () => {
  const letter = 'A';
  const shift = 20;
  const shifted = shiftLetter(letter, shift);
  const actualShifted = 'U';

  expect(shifted).toEqual(actualShifted);
});

test('Shift the letter "N" by 1', () => {
  const letter = 'N';
  const shift = 1;
  const shifted = shiftLetter(letter, shift);
  const actualShifted = 'O';

  expect(shifted).toEqual(actualShifted);
});

test('Shift the letter "N" by 7', () => {
  const letter = 'N';
  const shift = 7;
  const shifted = shiftLetter(letter, shift);
  const actualShifted = 'U';

  expect(shifted).toEqual(actualShifted);
});

test('Shift the letter "N" by 13', () => {
  const letter = 'N';
  const shift = 13;
  const shifted = shiftLetter(letter, shift);
  const actualShifted = 'A';

  expect(shifted).toEqual(actualShifted);
});

test('Shift the letter "N" by 20', () => {
  const letter = 'N';
  const shift = 20;
  const shifted = shiftLetter(letter, shift);
  const actualShifted = 'H';

  expect(shifted).toEqual(actualShifted);
});

test('Shift the letter "Z" by 1', () => {
  const letter = 'Z';
  const shift = 1;
  const shifted = shiftLetter(letter, shift);
  const actualShifted = 'A';

  expect(shifted).toEqual(actualShifted);
});

test('Shift the letter "Z" by 7', () => {
  const letter = 'Z';
  const shift = 7;
  const shifted = shiftLetter(letter, shift);
  const actualShifted = 'G';

  expect(shifted).toEqual(actualShifted);
});

test('Shift the letter "Z" by 13', () => {
  const letter = 'Z';
  const shift = 13;
  const shifted = shiftLetter(letter, shift);
  const actualShifted = 'M';

  expect(shifted).toEqual(actualShifted);
});

test('Shift the letter "Z" by 20', () => {
  const letter = 'Z';
  const shift = 20;
  const shifted = shiftLetter(letter, shift);
  const actualShifted = 'T';

  expect(shifted).toEqual(actualShifted);
});

test('Return same character if not a letter', () => {
  const letter = ' ';
  const shift = 1;
  const shifted = shiftLetter(letter, shift);
  const actualShifted = ' ';

  expect(shifted).toEqual(actualShifted);
});