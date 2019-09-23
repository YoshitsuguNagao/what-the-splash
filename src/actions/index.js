import { IMAGES } from "../constants/index";

const loadImahes = () => ({
  type: IMAGES.LOAD
});

const setImages = images => ({
  type: IMAGES.LOAD_SUCCESS,
  images
});

const setError = error => ({
  type: IMAGES.LOAD_FAIL,
  error
});

export { loadImahes, setImages, setError };
