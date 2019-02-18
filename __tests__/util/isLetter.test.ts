import { isLetter } from '../../lib/util';

test('should be true for "A"', () => {
  const letter = 'A';
  expect(isLetter(letter)).toBeTruthy();
});

test('should be false for "a"', () => {
  const letter = 'a';
  expect(isLetter(letter)).toBeFalsy();
});

test('should be false for " "', () => {
  const letter = ' ';
  expect(isLetter(letter)).toBeFalsy();
});

test('should be false for "%"', () => {
  const letter = '%';
  expect(isLetter(letter)).toBeFalsy();
});
