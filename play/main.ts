import { createApp } from 'vue';
import App from './app.vue';
// 引入组件库
import velo from '@velo/components';
const app = createApp(App);
// 全局挂载组件库
app.use(velo);
app.mount('#app');
