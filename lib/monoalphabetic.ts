import { isLetter, letters } from './util';

/**
 * function to check if a map has no entries that map to themselves
 * @param {Object.<string, string>} letterMap the map used for monoalphabetic encryption (ex. {"a": "b", "b": "c", ...})
 * @returns {boolean} if the passed in letterMap is valid or not
 * @example
 * validateLetterMap({
 *   "a": "b",
 *   "b": "a",
 * }) // true
 *
 * @example
 * validateLetterMap({
 *   "a": "a",
 *   "b": "b",
 * }) // false
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
 * @param {string} input the input string to encrypt (ex. "encrypt me")
 * @param {Object.<string, string>} map the map to encrypt with (optional) (ex. {"a": "b", "b": "c", ...})
 * @param {string} alphabetType the alphabet type to use when encrypting (optional) (ex. k1, k2, random)
 * @returns {string} the encrypted string
 * @example
 * monoalphabetic("abc", {
 *   "a": "b",
 *   "b": "c",
 *   "c": "a"
 * }) // "bca"
 */
export function monoalphabetic(input: string, map?: { [letter: string]: string }, alphabetType?: string) {
  return input;
}
