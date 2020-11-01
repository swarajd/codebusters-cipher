import { isLetter, letters } from './util';

/**
 * function to check if a map has no entries that map to themselves
 * @param {Object.<string, string>} letterMap the map used for monoalphabetic encryption (ex. {"A": "B", "B": "C", ...})
 * @throws  Will throw an error if the passed in letterMap is not valid
 * @example
 * ```js
 * validateLetterMap({
 *   "A": "B",
 *   "B": "A",
 *   ...
 *   "Y": "Z",
 *   "Z": "Y",
 * }) // returns nothing
 * ```
 *
 * @example
 * ```js
 * validateLetterMap({
 *   "A": "B",
 *   "B": "A",
 * }) // throws 'the map does not have enough keys (has 2 keys)'
 * ```
 *
 * @example
 * ```js
 * validateLetterMap({
 *   "a": "b",
 *   "B": "C",
 *   ...
 *   "Y": "Z",
 *   "Z": "A"
 * }) // throws 'the map contains non-capitalized key/value pairs: {a: b}'
 * ```
 *
 * @example
 * ```js
 * validateLetterMap({
 *   "A": "A",
 *   "B": "C",
 *   ...
 *   "Y": "Z",
 *   "Z": "B"
 * }) // throws 'the map contains keys that map to themselves: {A: A}'
 * ```
 *
 */
export function validateLetterMap(letterMap: { [letter: string]: string }) {
  const keys: string[] = Object.keys(letterMap);

  // the map should have 26 distinct keys
  const distinctKeys = new Set(keys);
  const lengthCond: boolean = distinctKeys.size === letters.length;

  if (!lengthCond) {
    throw new Error(`the map does not have enough distinct keys (has ${distinctKeys.size} distinct keys)`);
  }

  // each key and value should be a capitalized letter
  let invalidKeyValues = keys.filter(key => !(isLetter(key) && isLetter(letterMap[key])));

  if (invalidKeyValues.length > 0) {
    const invalidKeyStr = invalidKeyValues.map(key => `${key}: ${letterMap[key]}`).join(', ');
    throw new Error(
      `the map contains key/value pairs that are either not capitalized or not letters: {${invalidKeyStr}}`,
    );
  }

  // each key should not map to itself
  invalidKeyValues = keys.filter(key => key === letterMap[key]);

  if (invalidKeyValues.length > 0) {
    const invalidKeyStr = invalidKeyValues.map(key => `${key}: ${letterMap[key]}`).join(', ');
    throw new Error(`the map contains keys that map to themselves: {${invalidKeyStr}}`);
  }
}

/**
 * function to encrypt a string using using the monoalphabetic cipher
 * @param {string} input the input string to encrypt (ex. "encrypt me")
 * @param {Object.<string, string>} map the map to encrypt with (ex. {"a": "b", "b": "c", ...})
 * @returns {string} the encrypted string
 * @example
 * monoalphabetic("abc", {
 *   "a": "b",
 *   "b": "c",
 *   "c": "a"
 * }) // "bca"
 */
export function monoalphabetic(input: string, map: { [letter: string]: string }) {
  // validate the map to make sure we're encrypting with a proper map
  validateLetterMap(map);

  return input
    .toUpperCase()
    .split('')
    .map(char => (isLetter(char) ? map[char] : char))
    .join('');
}
