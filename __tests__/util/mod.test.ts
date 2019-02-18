import { mod } from '../../lib/util';

test('negative mod', () => {
  const value = -7;
  const modNum = 26;
  const expected = 19;
  const received = mod(value, modNum);

  expect(received).toEqual(expected);
});

test('number greater than twice mod', () => {
  const value = 53;
  const modNum = 26;
  const expected = 1;
  const received = mod(value, modNum);

  expect(received).toEqual(expected);
});

test('number greater than mod, not greater than twice than', () => {
  const value = 35;
  const modNum = 26;
  const expected = 9;
  const received = mod(value, modNum);

  expect(received).toEqual(expected);
});

test('number less than mod', () => {
  const value = 11;
  const modNum = 26;
  const expected = 11;
  const received = mod(value, modNum);

  expect(received).toEqual(expected);
});
