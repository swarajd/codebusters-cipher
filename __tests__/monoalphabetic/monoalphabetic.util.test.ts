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

  const result = validateLetterMap(letterMap);
  expect(result).toBeTruthy();
});

test('validate improper map (not enough keys)', () => {
  const letterMap: { [letter: string]: string } = {
    A: 'B',
    B: 'C',
  };

  const result = validateLetterMap(letterMap);
  expect(result).toBeFalsy();
});

test('validate improper map (letters are lowercase)', () => {
  const letterMap: { [letter: string]: string } = {
    a: 'a',
    b: 'c',
    c: 'd',
    d: 'e',
    e: 'f',
    f: 'g',
    g: 'h',
    h: 'i',
    i: 'j',
    j: 'k',
    k: 'l',
    l: 'm',
    m: 'n',
    n: 'o',
    o: 'p',
    p: 'q',
    q: 'r',
    r: 's',
    s: 't',
    t: 'u',
    u: 'v',
    v: 'w',
    w: 'x',
    x: 'y',
    y: 'z',
    z: 'z',
  };

  const result = validateLetterMap(letterMap);
  expect(result).toBeFalsy();
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

  const result = validateLetterMap(letterMap);
  expect(result).toBeFalsy();
});
