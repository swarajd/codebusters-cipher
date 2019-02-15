import { shiftLetter } from './util';

/**
 * caesar cipher with optional shift
 *
 * @example
 * // returns 'BCD'
 * caesar('ABC', 1)
 *
 * @example
 * // returns 'NOP'
 * caesar('ABC')
 *
 * @param input the (capitalized) input string to encrypt
 * @param shift the number to shift each letter by
 */
export function caesar(input: string, shift: number = 13): string {
  return input
    .toUpperCase()
    .split('')
    .map(letter => shiftLetter(letter, shift))
    .join('');
}
