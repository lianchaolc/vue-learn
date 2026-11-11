# ✅ 你的 Vite+Vue3 项目启动完整步骤（就是你现在这个 proLearn）

> 
> 你刚才页面 `localhost:5173/test` 已经跑成功，说明环境没问题，我给你标准化流程，以后关掉终端之后重新启动就按这个来

## 1. 打开 VSCode 的【终端】（就是下面那个面板）

⚠️ 重点：**终端路径必须在项目根目录（proLearn 文件夹里面，能看到 package.json）**
看左边资源管理器，根目录文件：`package.json`、`index.html`、`src` 这些，不要进到 src 里面！

## 2. 第一次拉代码 / 换电脑：先安装依赖（只需要执行一次）

```
npm install
```

- 作用：读取 `package.json`，下载 vue、vue-router、vite 所有包
- 已经装过、有 `node_modules` 文件夹，**这条不用再跑**

## 3. 启动开发服务（日常写代码，每次都执行这个）

```
npm run dev
```

回车之后，终端会输出类似：

```
VITE v5.x.x  ready in xxx ms
➜  Local:   http://localhost:5173/
➜  Network: http://192.168.x.x:5173/
```

直接点链接，或者浏览器打开 `http://localhost:5173` 就能访问，和你刚才一样。

> 
> 你访问 `/test` 就是：`http://localhost:5173/test`

## 4. 其他常用命令（后面会用到）

```
# 打包上线（把代码编译成静态文件，给后端部署）
npm run build

# 打包之后，本地预览打包产物
npm run preview
```

## 5. 写代码期间

- 不用重启服务！Vite 自带 HMR（热更新），你保存 `.vue` 文件，浏览器自动刷新，就是你终端看到的 `hmr update`
- 想停止服务：终端窗口按 `Ctrl + C`

## 6. 常见报错排查

1. `'npm' 不是内部或外部命令` → 没有装 Node.js，去官网下载 node 安装
2. `Cannot find module` / 红报错 → 漏执行 `npm install`
3. 端口 5173 被占用 → 启动命令改成 `npm run dev -- --port 5174` 换端口
4. 终端路径不对（在 src 里面执行）→ 先 `cd ..` 返回根目录

## 7. 快速记忆

- 新装项目 / 换电脑：`npm install`（一次）
- 每天写代码：`npm run dev`
- 停止：`Ctrl + C`

现在你可以直接在终端敲 `npm run dev` 启动，然后我们就开始路线里第一个任务：写 FormDemo 表单页面！
要不要我直接把 FormDemo.vue 代码 + 路由配置给你？


####
2026.11.10 
# 标：搭建后台管理风格导航框架（适配你现金押运系统风格）

结构：**顶部导航栏 + 左侧侧边菜单 + 右侧主内容区（<router-view>放页面）**




#####
# 为什么刚才我们没有用 Element‑Plus 布局组件？

先区分两件事：**你项目可以装 Element‑Plus，只是当前这个页面我给你写的是「手写原生布局」，没有用它的 `<el‑layout>` / `<el‑header>` / `<el‑aside>` 组件**。

## 1、两种实现方式对比

### 方式 A：手写布局（现在代码的方案）

就是你这份代码：自己写 `div + flex`，class：`.layout-wrap`、`.top-header`、`.left‑aside`。

```
<header class="top-header">顶部</header>
<aside class="left-aside">侧边</aside>
```

✅优点

1. **零依赖约束**，布局完全自己掌控，想改什么颜色、尺寸、间距直接改 CSS，不受组件库默认样式干扰。
2. 理解原理，适合练习 Vue 基础布局，明白 flex 怎么实现后台框架。
3. 样式修改简单，不需要写大量 `:deep()` 和 `!important` 去覆盖组件库自带样式。
2026.11.11
#打开visual studio 的工作区间总是    终端路径总是打开位置不正确无法运行 、
解决方法
一句话先说清楚：
VS Code 的 `${workspaceFolder}` 就是**你打开的工作区根目录（proLearn）**，`terminal.integrated.cwd` 是用来指定【新终端默认启动目录】的配置项。

### 拆开讲原因

1. **默认规则**
你打开的是 `proLearn` 这个文件夹，VS Code 默认新开终端，就直接落在 `proLearn` 这一层。
但是你的 vite 项目（带 package.json、src、router 的）藏在它的子文件夹 `vueprovone` 里面。
npm 命令**必须在包含 package.json 的目录执行**，外层目录执行就会报错，找不到脚本。
2. **这个配置的作用**

```
"terminal.integrated.cwd": "${workspaceFolder}/vueprovone"
```

含义：

> 
> 工作区根目录 + `/vueprovone`，自动拼接成完整路径
> 新开终端的时候，自动 cd 到 `proLearn/vueprovone`，不用你手动敲 cd。

3. 为什么不直接写死绝对路径 `D:\Cenlent_Code\...`

- 写死绝对路径：换电脑、移动整个项目文件夹，配置直接失效，很僵硬
- 用 `${workspaceFolder}` 变量：**整个 proLearn 文件夹随便挪位置，配置依然能用**，属于项目自带配置，给别人拷贝项目过去也能正常生效。

4. 适用边界（理解这个就不会踩坑）
这个配置**只对当前这个工作区（proLearn）生效**，你打开别的代码文件夹不受影响，不会干扰别的项目。


代码备份出bug


<template>
  <div class="demo-wrap">
    <div class="demo-header">顶部测试头部</div>
    <div class="demo-body">
      <aside class="demo-aside">侧边栏</aside>
      <main class="demo-content">内容区域</main>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.demo-wrap {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #ccc;
}
.demo-header {
  height:60px;
  background:#1677ff;
  color:white;
}
.demo-body {
  flex:1;
  display:flex;
}
.demo-aside {
  width:200px;
  background:#333;
  color:#fff;
}
.demo-content {
  flex:1;
  background:#f5f7fa;
}
</style>
****************************




- template 内注释：`<!-- 注释 -->`
- style (css) 内注释：`/* 注释 */`
- script 内注释：`// 单行` / `/*多行*/`
- template、script、style**标签外面不能写任何注释或代码**。