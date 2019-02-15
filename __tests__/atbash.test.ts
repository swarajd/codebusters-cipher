import { atbash, atbashLetter } from '../lib/atbash';

test('test atbashLetter with the letter "A"', () => {
  const testStr: string = 'A';
  const received: string = atbashLetter(testStr);
  const expected: string = 'Z';

  expect(received).toEqual(expected);
});

test('test atbashLetter with the letter "N"', () => {
  const testStr: string = 'N';
  const received: string = atbashLetter(testStr);
  const expected: string = 'M';

  expect(received).toEqual(expected);
});

test('test atbash with a word', () => {
  const testStr: string = 'WORD';
  const received: string = atbash(testStr);
  const expected: string = 'DLIW';

  expect(received).toEqual(expected);
});

test('test atbash with a sentence', () => {
  const testStr: string = 'THIS IS A WORD';
  const received: string = atbash(testStr);
  const expected: string = 'GSRH RH Z DLIW';

  expect(received).toEqual(expected);
});
