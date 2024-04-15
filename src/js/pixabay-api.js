import axios from 'axios';



export async function getPhotos(q, page) {
  const API_KEY = '43325710-e7e524061030eee35d9931e23';
  const baseUrl = 'https://pixabay.com/api';

  const params = new URLSearchParams({
    key: API_KEY,
    q,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: '15',
    page,
  });

  try {
    const response = await fetch(`${baseUrl}/?${params}`);
    if (!response.ok) {
      throw new Error(response.status);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
}




// export function getPhotos(q, page) {
//   const API_KEY = '43325710-e7e524061030eee35d9931e23';
//   const baseUrl = 'https://pixabay.com/api';


//   const params = new URLSearchParams({
//     key: API_KEY,
//     q,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: 'true',
//     per_page: '15',
//     page,
//   });

//   return fetch(`${baseUrl}/?${params}`).then(res => {
//     if (!res.ok) {
//       throw new Error(res.status);
//     }
//     return res.json();
//   });
// }
