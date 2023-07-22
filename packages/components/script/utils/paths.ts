// 用于维护组件库路径

import { resolve } from "path";

//组件库根目录
export const componentPath = resolve(__dirname, "../../");

//packages根目录
export const pkgPath = resolve(__dirname, "../../../");
