import { cipher } from '../lib/index';

// generic identity cipher test
test('My Cipher', () => {
  expect(cipher('x')).toBe('x');
});

test('another test', () => {
  expect(1).toBe(1);
});
