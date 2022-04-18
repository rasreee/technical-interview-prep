const path = require('path');
const { getDirectoryNames, getModuleAliasMap } = require('./tools.js');

const tsconfigJson = require('./tsconfig.json');
const modulePathAliases = getModuleAliasMap(getDirectoryNames(path.join(__dirname, 'src')), tsconfigJson.compilerOptions.baseUrl);

/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '.(ts|tsx)': 'ts-jest',
  },
  modulePathIgnorePatterns: ['build/', '__fixtures__/'],
  runner: 'groups',
  moduleNameMapper: {
    ...modulePathAliases,
  },
  watchPlugins: [
    [
      'jest-watch-typeahead/filename',
      {
        key: 'k',
        prompt: 'do something with my custom prompt',
      },
    ],
    'jest-watch-typeahead/testname',
  ],
};
