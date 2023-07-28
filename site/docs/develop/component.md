# 组件开发
<br />
<br />

组件开发写在目录`components/src`下,比如`button`组件目录如下
```
-- components
    -- src 存放组件根目录
        -- button 
            -- __test__ 单元测试
            -- style 样式文件
            -- button.vue 组件主要逻辑
            -- index.ts 导出组件
        -- components.d.ts 所有组件的类型声明
        -- index.ts 集中导出所有组件
    -- index.ts 组件库入口文件
```

button组件开发示例

```vue
<template>
  <button class="ve-button" :class="buttonStyle" @click="handleClick">
    <div class="mask" v-if="buttonProps.disabled"></div>
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { computed } from 'vue';
import './style/style.scss';
// 为组件设置名称
defineOptions({ name: 've-button' });
// 定义组件的props
const buttonProps = defineProps({
  type: {
    type: String,
    default: 'default',
    validator: (val: string) => {
      return [
        'default',
        'primary',
        'success',
        'info',
        'warning',
        'danger'
      ].includes(val);
    }
  },
  size: {
    type: String,
    default: 'medium',
    validator: (val: string) => {
      return ['mini', 'medium', 'small'].includes(val);
    }
  },
  // 朴素按钮
  plain: {
    type: Boolean,
    default: false
  },
  // 圆角
  round: {
    type: Boolean,
    default: false
  },
  // 拟态
  soft: {
    type: Boolean,
    default: false
  },
  // 圆形
  circle: {
    type: Boolean,
    default: false
  },
  // 禁用
  disabled: {
    type: Boolean,
    default: false
  },
  // 图标
  icon: {
    type: String,
    default: ''
  }
});
// 组件样式
const buttonStyle = computed(() => {
  return [
    `ve-button--${buttonProps.type}`,
    `ve-button--${buttonProps.size}`,
    {
      'is-plain': buttonProps.plain,
      'is-round': buttonProps.round,
      'is-soft': buttonProps.soft,
      'is-circle': buttonProps.circle,
      'is-disabled': buttonProps.disabled
    }
  ];
});
// 点击事件
const emit = defineEmits(['click']);
const handleClick = (e: Event) => {
  emit('click', e);
};
</script>
```

导出组件示例(button/index.ts)

```js
import _Button from "./button.vue";
import { withInstall } from "@velo/utils";
export const Button = withInstall(_Button);
export default Button;
```

导出全部组件(src/index.ts)

```js
export * from "./button";
export * from "./xx";
```

组件库入口文件(components/index.ts)

```js
import * as components from "./src/index";
export * from "./src/index";
import { App } from "vue";

export default {
  install: (app: App) => {
    for (let c in components) {
      app.use(components[c]);
    }
  },
};
```