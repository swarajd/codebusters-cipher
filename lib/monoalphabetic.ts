import { isLetter, letters } from './util';

/**
 * function to check if a map has no entries that map to themselves
 * @param letterMap the map used for monoalphabetic encryption
 */
export function validateLetterMap(letterMap: { [letter: string]: string }): boolean {
  const keys: string[] = Object.keys(letterMap);

  // the map should have 26 keys
  const lengthCond: boolean = keys.length === letters.length;

  // each key and value should be a capitalized letter
  const letterCond: boolean = keys.map(k => isLetter(k) && isLetter(letterMap[k])).every(x => x);

  // each key should not map to itself
  const uniqueCond: boolean = !keys.map(k => k === letterMap[k]).some(x => x);

  return lengthCond && letterCond && uniqueCond;
}

/**
 * function to encrypt a string using using the monoalphabetic cipher
 * @param input the input string to encrypt
 * @param map the map to encrypt with (optional)
 * @param alphabetType the alphabet type to use when encrypting (optional)
 */
export function monoalphabetic(input: string, map?: { [letter: string]: string }, alphabetType?: string) {
  return input;
}
