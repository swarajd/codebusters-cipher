import { cipher } from '../lib/index';

test('My Cipher', () => {
  expect(cipher('x')).toBe('x');
});