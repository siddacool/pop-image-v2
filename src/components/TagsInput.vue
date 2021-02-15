<template>
  <div class="textbox tags-input">
    <input
      type="text"
      @change="handleTagsInputChange"
      :value="tags"
      placeholder="Search tags e.g. sky,night"
    />
  </div>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import store from '../store';
const { getters, actions } = store;
const { updateTags } = actions;
const { getTagsInTextFormat: tags } = getters;

const handleTagsInputChange = (e) => {
  updateTags(e.target.value);
};
</script>

<style lang="scss" scoped>
.tags-input {
  input {
  }
}
</style>
