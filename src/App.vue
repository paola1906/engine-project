<script setup lang="ts">
import { RouterView } from 'vue-router';
import headerView from './views/header-view.vue';
import sidebarLayout from './components/layout/sidebar/sidebar-layout.vue';
import footerView from './views/footer-view.vue';
</script>

<template>
  <div class="app__wrapper">
    <header-view></header-view>
    <div class="app__main-wrapper">
      <sidebar-layout />
      <div class="app__main-content">
        <router-view />
      </div>
    </div>
    <footer-view></footer-view>
  </div>
</template>

<style scoped>
.app__wrapper {
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100vh
}

.app__main-wrapper {
  display: flex;
  flex-direction: row;
  gap: 24px;
  height: calc(100% - 132px);
}

.app__main-content {
  padding: 16px 24px;
  flex: 1 1;
  overflow: auto;
}
</style>
