import fs from 'fs';
import invariant from 'lib/invariant';
import { is } from 'lib/is';

export function createFile(pathname: string): void {
  fs.writeFileSync(pathname, '');
}

export function readTextFile(filePath: string): string {
  return fs.readFileSync(filePath, 'utf8');
}

export const readJSONArray = <T extends any[]>(filePath: string): T => {
  const content = readTextFile(filePath);
  const parsed = JSON.parse(content);

  invariant(is.array(parsed));

  return parsed as T;
};
