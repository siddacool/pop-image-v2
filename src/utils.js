import { getStorage, updateStorage } from './storage';

export const textToArray = (text) =>
  text
    .trim()
    .replace(/\s/g, '')
    .split(',')
    .filter((t) => t && t.trim() !== '');

export const addInitialTheme = () => {
  const body = document.querySelector('body');
  const { darkTheme = false } = getStorage();

  if (darkTheme) {
    body.classList.add('dark');
  }
};

export const toggleTheme = () => {
  const body = document.querySelector('body');

  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    updateStorage({ darkTheme: false });
  } else {
    body.classList.add('dark');
    updateStorage({ darkTheme: true });
  }
};
