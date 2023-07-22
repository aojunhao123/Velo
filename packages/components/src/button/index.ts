import _Button from "./button.vue";
// 导入 App 和 Plugin 类型。App 类型代表 Vue 应用实例，Plugin 类型用于声明插件对象。
import type { App, Plugin } from "vue";
// 定义交叉类型
type SFCWithInstall<T> = T & Plugin;

const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    const name = (comp as any).name;
    //注册组件
    app.component(name, comp as SFCWithInstall<T>);
  };
  return comp as SFCWithInstall<T>;
};
export const Button = withInstall(_Button);
export default Button;

// // 具名暴露
// export { _Button };
// // 默认暴露(其他文件导入时可以使用任意名称来引用该组件)
// export default _Button;
