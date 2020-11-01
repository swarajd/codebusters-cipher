import { mod, validateAffineKeyPair, affineLetter, affine } from '../lib/affine';

describe('mod', () => {
  test('mod with two positive numbers', () => {
    const n = 10;
    const m = 3;

    const expected = 1;
    const result = mod(n, m);

    expect(result).toBe(expected);
  });

  test('mod with negative number', () => {
    const n = -10;
    const m = 3;

    const expected = 2;
    const result = mod(n, m);

    expect(result).toBe(expected);
  });

  test('mod with negative modulus value', () => {
    expect(() => {
      mod(1, -1);
    }).toThrow('modulus constant must be at least 1');
  });
});

describe('validateAffineKeyPair', () => {
  test('valid key pair', () => {
    const keyPair = {
      a: 1,
      b: 0,
    };

    expect(() => {
      validateAffineKeyPair(keyPair);
    }).not.toThrowError();
  });

  test('invalid a value', () => {
    const keyPair = {
      a: 2,
      b: 0,
    };

    expect(() => {
      validateAffineKeyPair(keyPair);
    }).toThrow('a must be an invertible value mod 26');
  });

  test('invalid b value', () => {
    const keyPair = {
      a: 1,
      b: 26,
    };

    expect(() => {
      validateAffineKeyPair(keyPair);
    }).toThrow('b must be in the range 0..25 inclusive');
  });
});

describe('affineLetter', () => {
  test('valid transformation', () => {
    const keyPair = {
      a: 5,
      b: 8,
    };

    const plaintext = 'A';
    const expected = 'I';

    const result = affineLetter(plaintext, keyPair);

    expect(result).toBe(expected);
  });
});

describe('affine', () => {
  test('transforms plaintext without spaces or punctuation', () => {
    const keyPair = {
      a: 5,
      b: 8,
    };

    const plaintext = 'ASDF';
    const expected = 'IUXH';

    const result = affine(plaintext, keyPair);

    expect(result).toBe(expected);
  });

  test('transforms plaintext with spaces and/or punctuation', () => {
    const keyPair = {
      a: 5,
      b: 8,
    };

    const plaintext = `MOM'S SPAGHETTI`;
    const expected = `QAQ'U UFIMRCZZW`;

    const result = affine(plaintext, keyPair);

    expect(result).toBe(expected);
  });

  test("should crash if the keypair isn't valid", () => {
    const keyPair = {
      a: 4,
      b: 8,
    };

    const plaintext = `MOM'S SPAGHETTI`;

    expect(() => {
      affine(plaintext, keyPair);
    }).toThrowError();
  });
});
