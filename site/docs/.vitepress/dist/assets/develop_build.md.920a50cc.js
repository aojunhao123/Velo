import{_ as e,c as a,o,U as t}from"./chunks/framework.0b960767.js";const m=JSON.parse('{"title":"组件打包与发布","description":"","frontmatter":{},"headers":[],"relativePath":"develop/build.md","filePath":"develop/build.md"}'),c={name:"develop/build.md"},r=t('<h1 id="组件打包与发布" tabindex="-1">组件打包与发布 <a class="header-anchor" href="#组件打包与发布" aria-label="Permalink to &quot;组件打包与发布&quot;">​</a></h1><br><br><h2 id="打包" tabindex="-1">打包 <a class="header-anchor" href="#打包" aria-label="Permalink to &quot;打包&quot;">​</a></h2><blockquote><p>执行<code>pnpm run build:velo</code>即可完成打包,打包后的文件在目录<code>packages/veloui下</code>。当然如果你想修改命令脚本的话,可以在 velo/package.json 中的 script 字段中修改</p></blockquote><h2 id="发布" tabindex="-1">发布 <a class="header-anchor" href="#发布" aria-label="Permalink to &quot;发布&quot;">​</a></h2><p>发布之前你需要将项目关联一个 git 仓库,并且提交所有修改后执行<code>pnpm run publish:velo</code>,此时会有一些提示如选择如何提升版本,是否发布,是否加个 tag 等等</p><p>当然,如果你没有登录 npm 的话,会先让你登录 npm。注意发布之前要将<code>packages/veloui</code>下 package.json 中 name 字段改成自己组件库的名字</p>',8),d=[r];function l(n,i,s,p,_,u){return o(),a("div",null,d)}const b=e(c,[["render",l]]);export{m as __pageData,b as default};