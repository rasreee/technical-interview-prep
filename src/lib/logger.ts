import chalk from 'chalk';
import { runIf } from 'lib/function';
import { is } from 'lib/is';

export type LogFunction = (message?: any, ...optionalParams: any[]) => void;

const white = chalk.whiteBright;

/** Using chalk + console + only logging when NODE_ENV is not 'test'
 */
function makeLogFunction(logFunction: LogFunction = console.log, color: chalk.Chalk = white.bold): LogFunction {
  return (...args: Parameters<LogFunction>) => runIf(!is.test(), () => logFunction('\n' + color(...args) + '\n'));
}

export const logger = {
  debug: makeLogFunction(console.log, white.bold),
  info: makeLogFunction(console.info, white),
  warn: makeLogFunction(console.warn, chalk.hex('#ff9900').bold),
  error: makeLogFunction(console.error, chalk.bold.red),
  success: makeLogFunction(console.log, white.bold),
  time: console.time,
  section: makeLogFunction(console.log),
};
