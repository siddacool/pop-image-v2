const localStorageName = 'pop-image-local-cookie-002';

const defaultData = {
  darkTheme: false,
  tags: [],
};

const getStorageMain = () => {
  let store = localStorage.getItem(localStorageName);

  if (!store || (store && store.trim() === '')) {
    localStorage.setItem(localStorageName, JSON.stringify(defaultData));
    store = localStorage.getItem(localStorageName);
  }

  store = JSON.parse(store || '{}');

  return store;
};

export const getStorage = getStorageMain;

export const updateStorage = (items = {}) => {
  let store = getStorageMain();
  store = { ...store, ...items };

  localStorage.setItem(localStorageName, JSON.stringify(store || {}));
};
