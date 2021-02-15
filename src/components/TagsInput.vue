<template>
  <div class="textbox tags-input">
    <input
      type="text"
      :value="tags"
      placeholder="Search tags e.g. sky, night"
      @change="handleTagsInputChange"
      @keyup.enter="handleOnEnter"
    />
  </div>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import store from '../store';
const { getters, actions } = store;
const { updateTags, fetchImage } = actions;
const { getTagsInTextFormat: tags } = getters;

const handleTagsInputChange = (e) => {
  updateTags(e.target.value);
};

const handleOnEnter = (e) => {
  fetchImage();
};
</script>

<style lang="scss" scoped>
.tags-input {
  input {
  }
}
</style>
