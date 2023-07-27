import{_ as a,c as s,o as e,U as l}from"./chunks/framework.0b960767.js";const _=JSON.parse('{"title":"快速开始","description":"","frontmatter":{},"headers":[],"relativePath":"guide/quickstart.md","filePath":"guide/quickstart.md"}'),t={name:"guide/quickstart.md"},n=l('<h1 id="快速开始" tabindex="-1">快速开始 <a class="header-anchor" href="#快速开始" aria-label="Permalink to &quot;快速开始&quot;">​</a></h1><ul><li>安装 pnpm</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm install pnpm -g</span></span></code></pre></div><ul><li>初始化框架</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">npm create velo-app</span></span></code></pre></div><ul><li>安装依赖</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pnpm install</span></span></code></pre></div><ul><li>打包示例组件库</li></ul><p><strong>注意:</strong> 这里需要先执行一次打包,因为组件库文档引用了打包后的文件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pnpm run velo:build</span></span></code></pre></div><ul><li>启动测试项目</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">pnpm run velo:dev</span></span></code></pre></div>',12),p=[n];function i(o,c,r,d,u,g){return e(),s("div",null,p)}const h=a(t,[["render",i]]);export{_ as __pageData,h as default};