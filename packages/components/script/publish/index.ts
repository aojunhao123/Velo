// 该模块用于自动管理发布组件库

import run from '../utils/run';
import { pkgPath } from '../utils/paths';
import { series } from 'gulp';
export const publishComponent = async () => {
  run('release-it', `${pkgPath}/veloui`);
};
export default series(async () => publishComponent());
