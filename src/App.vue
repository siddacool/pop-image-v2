<template>
  <header>
    <div class="top-bar">
      <TagsInput />
      <Refresh />
    </div>

    <div class="side-bar">
      <ThemeToggleButton />
    </div>
  </header>
  <main>
    <img :src="image" alt="Unsplash random" v-if="image" />
    <div class="loading-placeholder" v-else><LoadingAnimation /></div>
  </main>
  <nav>
    <Refresh />
    <ThemeToggleButton />
  </nav>
</template>

<script setup>
/* eslint-disable no-unused-vars */
import { onMounted } from 'vue';
import TagsInput from './components/TagsInput.vue';
import Refresh from './components/Refresh.vue';
import LoadingAnimation from './components/LoaderThreeDots.vue';
import ThemeToggleButton from './components/ThemeToggleButton.vue';
import store from './store';
import { addInitialTheme } from './utils';

const { getters, actions } = store;
const { getImage: image, getIsImageFetching: isImageFetching } = getters;
const { fetchImage } = actions;

addInitialTheme();

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
  background-color: var(--color-grey-10);
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
  display: flex;

  @include onTablet {
    padding: var(--unit-3) var(--unit-4);
  }

  .top-bar {
    width: 100%;
    @include onDesktop {
      width: 500px;
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

  .side-bar {
    .theme-toggle-button {
      display: none;
      @include onDesktop {
        display: flex;
      }
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

    svg {
      fill: var(--color-grey-100);
    }
  }
}

nav {
  position: fixed;
  z-index: 100;
  right: 0;
  bottom: 0;
  padding-right: var(--unit-3);
  padding-bottom: var(--unit-5);
  display: flex;
  flex-direction: column;

  @include onTablet {
    padding-right: var(--unit-4);
  }

  @include onDesktop {
    display: none;
  }

  button:not(:last-child) {
    margin-bottom: var(--unit-2);
  }
}
</style>
