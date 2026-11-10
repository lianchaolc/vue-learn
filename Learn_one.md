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