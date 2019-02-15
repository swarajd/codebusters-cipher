import { shiftLetter } from './util';

export const caesar = (input: string, shift: number = 13): string => {
  return input
    .toUpperCase()
    .split('')
    .map(letter => shiftLetter(letter, shift))
    .join('');
};
