<template>
  <button
    @click="fetchImage"
    class="btn refresh-button"
    :disabled="isImageFetching"
  >
    Refresh
  </button>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import store from '../store';
const { getters, actions } = store;
const { getIsImageFetching: isImageFetching } = getters;
const { fetchImage } = actions;
</script>

<style lang="scss" scoped>
.refresh-button {
}
</style>
