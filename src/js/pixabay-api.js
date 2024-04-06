import axios from 'axios';

const API_KEY = '43234109-b8a56a1b11e396064285a6ce5';
const BASE_URL = 'https://pixabay.com';
const END_POINT = '/api';

export async function getPhotos(q, page) {
  const params = {
    q,
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 9,
    page,
  };
  const options = new URLSearchParams(params);
  const url = `${BASE_URL}${END_POINT}/?${options}`;

  const res = await axios.get(url);
  try {
    return res.data;
  } catch {
    iziToast.error({
      title: 'Error',
      message: 'Ups.. Something wrong',
      position: 'topRight',
    });
  }
}
