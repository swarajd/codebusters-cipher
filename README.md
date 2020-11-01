[![Build Status](https://travis-ci.org/swarajd/codebusters-ciphers.svg?branch=master)](https://travis-ci.org/swarajd/codebusters-ciphers)

# Codebusters-Ciphers

Codebusters-Ciphers is a Javascript library written in TypeScript for Science Olympiad Codebusters ciphers

## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install Codebusters-Ciphers.

```bash
npm install --save @swarajd/codebusters-ciphers
```

## Usage

```js
const { caesar } = require('@swarajd/codebusters-ciphers');

const plaintext = 'ABCD';
const ciphertext = caesar(plaintext); // "NOPQ"
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[ISC](https://choosealicense.com/licenses/isc/)
