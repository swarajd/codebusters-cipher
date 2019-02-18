/**
 * list of capitalized letters
 */
export const letters: string[] = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));

/**
 * set of capitalized letters
 */
export const letterSet: Set<string> = new Set(letters);

/**
 * mapping of capitalized letters to indices (A -> 0, B -> 1, ...)
 */
export const letterDict: { [letter: string]: number } = letters.reduce(
  (letterMap: { [letter: string]: number }, letter: string): { [letter: string]: number } => {
    letterMap[letter] = letter.charCodeAt(0) - 65;
    return letterMap;
  },
  {},
);

/**
 * a function that does n mod m
 *
 * @example
 * // returns 19
 * mod(-7, 26)
 *
 * @example
 * // returns 1
 * mod(53, 26)
 *
 * @example
 * // returns 9
 * mod(35, 26)
 *
 * @example
 * // returns 11
 * mod(11, 26)
 *
 * @param n the number to mod
 * @param m the coefficient to mod by
 */
export function mod(n: number, m: number): number {
  return ((n % m) + m) % m;
}

/**
 * check if a character is a letter
 * @param character character to check membership in letter set
 */
export function isLetter(character: string) {
  return letterSet.has(character);
}

/**
 * utility to shift a capitalized letter by a certain amount
 *
 * @example
 * // returns 'D'
 * shiftLetter('A', 3)
 *
 * @param letter the letter we want to shift
 * @param shift the amount we want to shift by
 */
export function shiftLetter(letter: string, shift: number): string {
  // return the same letter if it doesn't exist
  if (!isLetter(letter)) {
    return letter;
  }

  // convert the letter to a number (ex. A -> 0)
  const idx: number = letterDict[letter.toUpperCase()];

  // calculate the new index
  const newIdx: number = mod(idx + shift, letters.length);

  // convert the new index to a letter
  const result = letters[newIdx];

  // return the letter
  return result;
}
