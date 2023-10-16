require('ts-node/register');

module.exports = {
  'moduleFileExtensions': [
    'js',
    'json',
    'ts',
  ],
  'rootDir': 'lib',
  'testRegex': '/lib/.*\\.spec\\.(ts|js)$',
  "transform": {
    "^.+\\.(t|j)s$": "ts-jest"
  },
  'preset': 'ts-jest',
};