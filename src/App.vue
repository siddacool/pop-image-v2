<template>
  <header>
    <div class="top-bar">
      <TagsInput />
      <Refresh />
    </div>
  </header>
  <main>
    <img :src="image" alt="Unsplash random" v-if="image" />
    <div class="loading-placeholder" v-else><LoadingAnimation /></div>
  </main>
  <nav></nav>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import { onMounted } from 'vue';
import TagsInput from './components/TagsInput.vue';
import Refresh from './components/Refresh.vue';
import LoadingAnimation from './components/LoaderThreeDots.vue';
import store from './store';

const { getters, actions } = store;
const { getImage: image, getIsImageFetching: isImageFetching } = getters;
const { fetchImage } = actions;

onMounted(() => {
  fetchImage({ firstLoad: true });
});
</script>

<style lang="scss">
@import './styles/mixins';

body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100vh;
  font-family: 'Rubik', sans-serif;
  margin: 0;
  padding: 0;
  background-color: var(--color-bg-grey-10);
  font-size: 16px;
}

html {
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

#app {
  min-height: inherit;
}

header {
  position: relative;
  z-index: 100;
  padding: var(--unit-3);

  @include onTablet {
    padding: var(--unit-3) var(--unit-4);
  }

  .top-bar {
    @include onDesktop {
      max-width: 500px;
      margin: 0 auto;
      display: flex;
    }

    .refresh-button {
      display: none;

      @include onDesktop {
        display: flex;
        margin-left: var(--unit-2);
      }
    }

    .tags-input {
      flex: 1;
    }
  }
}

main {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  img {
    height: inherit;
    width: inherit;
    display: block;
    object-position: center;
    object-fit: contain;
  }

  .loading-placeholder {
    display: flex;
    height: inherit;
    width: inherit;
    align-items: center;
    justify-content: center;
  }
}
</style>
