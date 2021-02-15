export const textToArray = (text) =>
  text
    .trim()
    .replace(/\s/g, '')
    .split(',')
    .filter((t) => t && t.trim() !== '');
