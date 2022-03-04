export const getIdFromUrl = url => {
  // var last = url.replace(/\/$/, '').split('/').splice(-1, 1);
  return url.split('/').pop();
};
