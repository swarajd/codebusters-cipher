import { atbash } from '../lib/atbash';

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
