import { reactive, readonly, computed } from 'vue';
import { textToArray } from '../utils';
import { getStorage, updateStorage } from '../storage';

const unsplashBaseUrlMain = 'https://source.unsplash.com/random';

const { tags } = getStorage();

const state = reactive({
  image: null,
  isImageFetching: false,
  tags,
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
      state.isImageFetching = false;
      return;
    }

    const { firstLoad = false } = config;

    if (firstLoad) {
      state.image = url;
      state.isImageFetching = false;
    } else {
      setTimeout(() => {
        state.image = url;
        state.isImageFetching = false;
      }, 2000);
    }
  } catch (err) {
    console.dir(err);
    state.isImageFetching = false;
  }
};

const updateTags = (tags) => {
  const tagsArray = textToArray(tags);
  state.tags = tagsArray;
  updateStorage({ tags: tagsArray });
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
