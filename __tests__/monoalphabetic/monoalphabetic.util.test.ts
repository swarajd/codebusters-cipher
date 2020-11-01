import { validateLetterMap } from '../../lib/monoalphabetic';

test('validate proper map', () => {
  const letterMap: { [letter: string]: string } = {
    A: 'B',
    B: 'C',
    C: 'D',
    D: 'E',
    E: 'F',
    F: 'G',
    G: 'H',
    H: 'I',
    I: 'J',
    J: 'K',
    K: 'L',
    L: 'M',
    M: 'N',
    N: 'O',
    O: 'P',
    P: 'Q',
    Q: 'R',
    R: 'S',
    S: 'T',
    T: 'U',
    U: 'V',
    V: 'W',
    W: 'X',
    X: 'Y',
    Y: 'Z',
    Z: 'A',
  };

  expect(() => {
    validateLetterMap(letterMap);
  }).not.toThrowError();
});

test('validate improper map (not enough keys)', () => {
  const letterMap: { [letter: string]: string } = {
    A: 'B',
    B: 'C',
  };

  expect(() => {
    validateLetterMap(letterMap);
  }).toThrow('the map does not have enough keys (has 2 keys)');
});

test('validate improper map (letters are lowercase)', () => {
  const letterMap: { [letter: string]: string } = {
    a: 'a',
    b: 'c',
    C: 'D',
    D: 'E',
    E: 'F',
    F: 'G',
    G: 'H',
    H: 'I',
    I: 'J',
    J: 'K',
    K: 'L',
    L: 'M',
    M: 'N',
    N: 'O',
    O: 'P',
    P: 'Q',
    Q: 'R',
    R: 'S',
    S: 'T',
    T: 'U',
    U: 'V',
    V: 'W',
    W: 'X',
    X: 'Y',
    Y: 'Z',
    Z: 'Z',
  };

  expect(() => {
    validateLetterMap(letterMap);
  }).toThrow('the map contains non-capitalized key/value pairs: {a: a, b: c}');
});

test('validate improper map (letter maps to self)', () => {
  const letterMap: { [letter: string]: string } = {
    A: 'A',
    B: 'C',
    C: 'D',
    D: 'E',
    E: 'F',
    F: 'G',
    G: 'H',
    H: 'I',
    I: 'J',
    J: 'K',
    K: 'L',
    L: 'M',
    M: 'N',
    N: 'O',
    O: 'P',
    P: 'Q',
    Q: 'R',
    R: 'S',
    S: 'T',
    T: 'U',
    U: 'V',
    V: 'W',
    W: 'X',
    X: 'Y',
    Y: 'Z',
    Z: 'Z',
  };

  expect(() => {
    validateLetterMap(letterMap);
  }).toThrow('the map contains keys that map to themselves: {A: A, Z: Z}');
});
