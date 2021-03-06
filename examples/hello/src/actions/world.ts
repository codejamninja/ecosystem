import { Logger } from '@ecosystem/core';
import { Config } from '../types';

export default async function world(config: Config, logger: Logger) {
  const spinner = logger.spinner.start(`started ${config.action}`);
  await new Promise(r => setTimeout(r, 3000));
  spinner.succeed('Hello, world!');
}
