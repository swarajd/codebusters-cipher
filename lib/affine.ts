import { isLetter, letters, letterDict } from './util';

/**
 * Find the modulus of a number given a certain base
 * @param n the number to mod
 * @param m the modulus base
 * @returns {number} the modulus of the number
 * @throws Will throw an error if the modulus is less than 1
 * @example
 * ```js
 * mod(5, 3) // returns 2
 * ```
 *
 * @example
 * ```js
 * mod(24, -1) // throws modulus constant must be at least 1
 * ```
 */
export function mod(n: number, m: number): number {
  if (m < 1) {
    throw new Error('modulus constant must be at least 1');
  }

  return ((n % m) + m) % m;
}

/**
 * validate an affine key pair
 * @param keyPair the affine key pair
 * @throws will throw an exception if the key pair is not valid
 *
 * @example
 * ```js
 * validateAffineKeyPair({a: 2, b: 2})
 * // throws "a must be an invertible value mod 26"
 * ```
 *
 * @example
 * ```js
 * validateAffineKeyPair({a: 1, b: -1})
 * // throws "b must be in the range 0..25 inclusive"
 * ```
 *
 * @example
 * ```js
 * validateAffineKeyPair({a: 1, b: 0})
 * // returns without throwing an error
 * ```
 */
export function validateAffineKeyPair(keyPair: { [key: string]: number }) {
  const { a, b } = keyPair;

  const possibleAs = new Set([1, 3, 5, 7, 9, 11, 15, 17, 19, 21, 23, 25]);

  if (!possibleAs.has(a)) {
    throw new Error('a must be an invertible value mod 26');
  }

  if (b < 0 || b > 25) {
    throw new Error('b must be in the range 0..25 inclusive');
  }
}

/**
 * Calculate the affine ciphertext of a given letter plaintext
 * @param letter the letter to find the affine ciphertext for
 * @param keyPair the affine cipher keypair
 * @returns {string} the encrypted letter
 *
 * @example
 * ```js
 *
 * ```
 */
export function affineLetter(letter: string, keyPair: { [key: string]: number }): string {
  const { a, b } = keyPair;
  const letterIndex = mod(a * letterDict[letter] + b, letters.length);
  return letters[letterIndex];
}

/**
 * function to encrypt a string using the atbash cipher
 *
 * @param input the plaintext to encrypt
 * @param keyPair the affine cipher keypair
 * @returns {string} the encrypted string
 *
 * @example
 * ```js
 * affine('THIS IS A WORD', {a: 1, b: 7}) // returns 'AOPZ PZ H DVYK'
 * ```
 */
export function affine(input: string, keyPair: { [key: string]: number }): string {
  validateAffineKeyPair(keyPair);

  return input
    .toUpperCase()
    .split('')
    .map(char => (isLetter(char) ? affineLetter(char, keyPair) : char))
    .join('');
}
