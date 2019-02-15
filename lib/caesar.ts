import { shiftLetter } from './util';

/**
 * caesar cipher with optional shift
 *
 * @example
 * // returns 'bcd'
 * caesar('abc', 1)
 *
 * @example
 * // returns 'nop'
 * caesar('abc')
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
