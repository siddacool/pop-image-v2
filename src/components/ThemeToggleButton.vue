<template>
  <button @click="handleThemeToggle" class="btn theme-toggle-button">
    {{ isDarkTheme ? 'Light' : 'Dark' }}
  </button>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import { ref } from 'vue';
import { getStorage, updateStorage } from '../storage';
const { darkTheme } = getStorage();
import { toggleTheme } from '../utils';
const isDarkTheme = ref(getStorage().darkTheme);

const handleThemeToggle = () => {
  toggleTheme();
  isDarkTheme.value = !isDarkTheme.value;
};
</script>

<style lang="scss" scoped></style>
