<template>
  <div class="layout-wrap">
    <!-- 顶部导航 -->
    <header class="top-header">
      <div class="logo">现金押运管理系统</div>
      <nav class="top-nav">
        <router-link to="/">首页看板</router-link>
        <router-link to="/customer">客户库存管理</router-link>
        <router-link to="/box">款箱管理</router-link>
        <router-link to="/transport">押运管理</router-link>
      </nav>
      <div class="user-info">
        <span>管理员</span>
        <button>退出</button>
      </div>
    </header>
    <div class="main-body">
      <!-- 左侧侧边菜单 -->
      <aside class="left-aside">
        <div class="menu-title">工作台</div>
        <ul class="side-menu">
          <li>
            <router-link to="/">首页看板</router-link>
          </li>
          <li>
            <router-link to="/customer">客户管理</router-link>
          </li>
          <li>
            <router-link to="/box">款箱管理</router-link>
          </li>
          <li>
            <router-link to="/transport">押运管理</router-link>
          </li>
        </ul>
        <div class="menu-title">系统管理</div>
        <ul class="side-menu">
          <li>
            <router-link to="/system/user">用户管理</router-link>
          </li>
        </ul>
      </aside>
      <!-- 主体内容区域，路由页面在这里渲染 -->
      <main class="content">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
// 这里暂时不用写逻辑，先搭框架
</script>

<style scoped>
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #333;
}

.layout-wrap {
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* ========== 顶部栏 改成柔和灰绿色 ========== */
.top-header {
  height: 60px;
  /* 灰绿，和侧边深色和谐，不刺眼 */
  background-color: #54655c;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 30px;
}

.top-header .logo {
  font-size: 18px;
  font-weight: bold;
  width: 200px;
}

.top-nav {
  display: flex;
  gap: 24px;
}

.top-nav a {
  color: #fff;
  padding: 0 8px;
  line-height: 60px;
  opacity: 0.88;
}

.top-nav a.router-link-active {
  opacity: 1;
  border-bottom: 3px solid #b0bcb5;
}

.user-info {
  margin-left: auto;
  display: flex;
  gap: 12px;
  align-items: center;
}

.user-info button {
  padding: 4px 8px;
  cursor: pointer;
}

/* ========== 主体：侧边栏 + 内容区 ========== */
.main-body {
  flex: 1;
  display: flex;
  overflow: hidden;
}

/* 左侧菜单 */
.left-aside {
  width: 200px;
  background-color: #2f3742;
  color: #fff;
  padding-top: 10px;
  overflow-y: auto;
}

.menu-title {
  padding: 12px 20px;
  color: #aaa;
  font-size: 13px;
}

.side-menu li a {
  display: block;
  padding: 12px 20px;
  color: #cbd5e1;
}
/* 侧边激活项，同步灰绿色，不再是蓝色 */
.side-menu li a.router-link-active {
  background-color: #47564d;
  color: #fff;
}

/* 右侧内容 */
.content {
  flex: 1;
  padding: 20px;
  background-color: #f5f7fa;
  overflow-y: auto;
}
</style>
