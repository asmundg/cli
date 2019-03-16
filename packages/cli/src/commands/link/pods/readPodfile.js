/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import fs from 'fs';
import logger from '../../../tools/logger';

export default function readPodfile(podfilePath) {
  logger.debug(`Reading ${podfilePath}`);
  const podContent = fs.readFileSync(podfilePath, 'utf8');
  return podContent.split(/\r?\n/g);
}
