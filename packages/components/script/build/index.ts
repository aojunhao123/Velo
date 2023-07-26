import delPath from '../utils/delpath';
import { series, parallel, src, dest } from 'gulp';
import { pkgPath, componentPath } from '../utils/paths';
import glupSass from 'gulp-sass';
import sassLang from 'sass';
const sass = glupSass(sassLang);
import autoprefixer from 'gulp-autoprefixer';
import run from '../utils/run';

//每次打包之前删除上一次打包的dist
export const removeDist = () => {
  return delPath(`${pkgPath}/veloui`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.scss`)
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/veloui/lib/src`))
    .pipe(dest(`${pkgPath}/veloui/es/src`));
};

//打包组件
export const buildComponent = async () => {
  run('pnpm run build', componentPath);
};

export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
