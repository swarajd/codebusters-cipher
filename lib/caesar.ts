import { shiftLetter } from './util';

/**
 * function to encrypt a string with the caesar cipher (with optional shift)
 *
 * @example
 * // returns 'BCD'
 * caesar('ABC', 1)
 *
 * @example
 * // returns 'NOP'
 * caesar('ABC')
 *
 * @param input the input string to encrypt
 * @param shift the number to shift each letter by
 */
export function caesar(input: string, shift: number = 13): string {
  return input
    .toUpperCase()
    .split('')
    .map(letter => shiftLetter(letter, shift))
    .join('');
}
