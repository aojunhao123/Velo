/* 
.d.ts后缀是typescript的声明文件,用于描述JavaScript模块的类型信息
*/
import * as components from "./index";
declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    VeButton: typeof components.Button;
    // VeIcon: typeof components.Icon;
  }
}
export {};
