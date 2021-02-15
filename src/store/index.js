import { reactive, readonly, computed } from 'vue';
import { textToArray } from '../utils';

const unsplashBaseUrlMain = 'https://source.unsplash.com/random';

const state = reactive({
  image: null,
  isImageFetching: false,
  tags: [],
});

const fetchImage = async (config = {}) => {
  try {
    if (state.isImageFetching) {
      console.log('Already fetching');
      return;
    }

    state.isImageFetching = true;
    state.image = null;
    const tags = state.tags.join(',');

    const { url = null } = await fetch(
      `${unsplashBaseUrlMain}${
        tags && tags.trim() !== '' ? `?${tags.trim()}` : ''
      }`,
    );

    if (!url) {
      console.log('No image found');
      return;
    }

    const { firstLoad = false } = config;

    if (firstLoad) {
      state.image = url;
    } else {
      setTimeout(() => {
        state.image = url;
      }, 2000);
    }
  } catch (err) {
    console.dir(err);
  } finally {
    state.isImageFetching = false;
  }
};

const updateTags = (tags) => {
  state.tags = textToArray(tags);
};

const getTagsInTextFormat = computed(() => state.tags.join(', '));

const getImage = computed(() => state.image);

const getIsImageFetching = computed(() => state.isImageFetching);

export default {
  state: readonly(state),
  actions: {
    fetchImage,
    updateTags,
  },
  getters: {
    getTagsInTextFormat,
    getImage,
    getIsImageFetching,
  },
};
