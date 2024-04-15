

export function getPhotos(q) {
  const API_KEY = '43325710-e7e524061030eee35d9931e23';
  const baseUrl = 'https://pixabay.com/api';


  const params = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${baseUrl}/?${params}`).then(res => {
    if (!res.ok) {
      throw new Error(res.status);
    }
    return res.json();
  });
}
