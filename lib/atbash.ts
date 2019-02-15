import { isLetter, letterDict, letters } from './util';

/**
 * function to run atbash on a single letter
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
 * // returns 'GSRH RH Z DLIW'
 * atbash('THIS IS A WORD')
 *
 * @param input the input string to encrypt
 */
export function atbash(input: string): string {
  return input
    .split('')
    .map(atbashLetter)
    .join('');
}
