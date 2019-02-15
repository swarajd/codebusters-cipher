/**
 * list of capitalized letters
 */
export const letters: string[] = Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65));

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
  const idx: number = letterDict[letter.toUpperCase()];
  const newIdx: number = (idx + shift) % letters.length;
  const result = letters[newIdx];
  return result;
}
