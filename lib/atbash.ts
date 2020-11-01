import { isLetter, letterDict, letters } from './util';

/**
 * function to encrypt a single letter using the atbash cipher
 *
 * @example
 * ```js
 * atbashLetter('A') // returns 'Z'
 * ```
 *
 * @param letter letter to perform atbash on
 */
export function atbashLetter(letter: string): string {
  if (isLetter(letter)) {
    return letters[letters.length - letterDict[letter] - 1];
  } else {
    return letter;
  }
}

/**
 * function to encrypt a string using the atbash cipher
 *
 * @example
 * ```js
 * atbash('THIS IS A WORD') // returns 'GSRH RH Z DLIW'
 * ```
 *
 * @param input the input string to encrypt
 */
export function atbash(input: string): string {
  return input
    .toUpperCase()
    .split('')
    .map(atbashLetter)
    .join('');
}
