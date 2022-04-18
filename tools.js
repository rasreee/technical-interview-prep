const path = require('path');
const fs = require('fs');

const getDirectoryNames = pathname => {
  return fs.readdirSync(pathname).filter(item => {
    const stats = fs.statSync(path.join(pathname, item));

    return stats.isDirectory() && item !== '__tests__' && item !== '__fixtures__' && item !== 'build';
  });
};

const getModuleAliasMap = (modules, baseUrl = 'src') => {
  return modules.reduce(
    (result, current) => ({
      ...result,
      ['^' + current + '/(.*)$']: '<rootDir>/' + path.join(baseUrl, current) + '/$1',
    }),
    {},
  );
};

module.exports = { getModuleAliasMap, getDirectoryNames };
