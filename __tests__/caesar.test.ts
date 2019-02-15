import { caesar } from '../lib/caesar';

test('caesar with shift of 1', () => {
  const testStr: string = 'ATOZ';
  const received: string = caesar(testStr, 1);
  const expected: string = 'BUPA';

  expect(received).toEqual(expected);
});

test('caesar with shift of 13', () => {
  const testStr: string = 'ATOZ';
  const received: string = caesar(testStr);
  const expected: string = 'NGBM';

  expect(received).toEqual(expected);
});

test('caesar with shift of 7', () => {
  const testStr: string = 'ATOZ';
  const received: string = caesar(testStr, 7);
  const expected: string = 'HAVG';

  expect(received).toEqual(expected);
});

test('caesar with shift of 20', () => {
  const testStr: string = 'ATOZ';
  const received: string = caesar(testStr, 20);
  const expected: string = 'UNIT';

  expect(received).toEqual(expected);
});
