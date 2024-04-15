// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';


import { getPhotos } from './js/pixabay-api.js';
import { createGalleryMarkup } from './js/render-function.js';
import { showLoader, hiddeLoader } from './js/render-function.js';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const gallery = document.querySelector('.gallery');
const form = document.querySelector('.js-form');
const loader = document.querySelector('.js-loader');
const loadBtn = document.querySelector('.btn-load-more');

let page = 1;
let imgPhoto = null;
const per_page = 15;


form.addEventListener('submit', onSubmit);

async function onSubmit(event) {
  event.preventDefault();
  imgPhoto = event.currentTarget.elements.search.value.trim();
  showLoader();
  loadBtn.classList.add('is-hidden');
  gallery.innerHTML = '';
  page = 1;

  if (!imgPhoto) {
    gallery.innerHTML = '';
    hiddeLoader();
    event.target.reset();
    return iziToast.error({
      message: `Sorry, there are no images matching your search query. Please try again!`,
      position: 'topRight',
    });
  }

  try {
    const data = await getPhotos(imgPhoto, page);
    if (data.totalHits > 0) {
      iziToast.success({
        message: `We found ${data.totalHits} fotos!`,
        position: 'topRight',
      });
    }

    if (data.hits.length === 0) {
      gallery.innerHTML = '';
      event.target.reset();
      return iziToast.error({
        message: `Sorry, there are no images matching your search query. Please try again!`,
        position: 'topRight',
      });
    }

    gallery.innerHTML = createGalleryMarkup(data.hits);
    if (data.totalHits > 15) {
      loadBtn.classList.remove('is-hidden');
    }
    lightbox.refresh();
  } catch (error) {
    console.log(error);
  } finally {
    hiddeLoader();
    form.reset();
  }
}


// then catch
// function onSubmit(event) {
//   event.preventDefault();
//  imgPhoto = event.currentTarget.elements.search.value.trim();
//   showLoader();
//   loadBtn.classList.add('is-hidden');
//   gallery.innerHTML = '';

//   page = 1;

//   if (!imgPhoto) {
//     gallery.innerHTML = '';
//     hiddeLoader();
//     event.target.reset();
//     return iziToast.error({
//       message: `Sorry, there are no images matching your search query. Please try again!`,
//       position: 'topRight',
//     });
//   }

//   getPhotos(imgPhoto, page)
//     .then(data => {
//       if (data.totalHits > 0) {
//         iziToast.success({
//           message: `We found ${data.totalHits} fotos!`,
//           position: 'topRight',
//         });
//       }

//       if (data.hits.length === 0) {
//         gallery.innerHTML = '';
//         event.target.reset();
//         return iziToast.error({
//           message: `Sorry, there are no images matching your search query. Please try again!`,
//           position: 'topRight',
//         });
//       }

//       gallery.innerHTML = createGalleryMarkup(data.hits);
//       if (data.totalHits > 15) {
//         loadBtn.classList.remove('is-hidden');
//       }
//       lightbox.refresh();
//     })
//     .catch(error => {
//       console.log(error);
//     })
//     .finally(() => {
//       hiddeLoader();
//     });
//   form.reset();
// }

loadBtn.addEventListener('click', onClick);

async function onClick() {
  page += 1;

  try {
    const data = await getPhotos(imgPhoto, page);
    gallery.insertAdjacentHTML('beforeEnd', createGalleryMarkup(data.hits));

    const { height: cardHeight } = document
      .querySelector('.gallery')
      .firstElementChild.getBoundingClientRect();

    window.scrollBy({
      top: cardHeight * 2,
      behavior: 'smooth',
    });

    const lastPages = Math.ceil(data.totalHits / per_page);
    if (lastPages === page) {
      loadBtn.classList.add('is-hidden');
      iziToast.info({
        message: `That's all!`,
        position: 'topRight',
      });
    }
  } catch (error) {
    console.log(error);
  }
}


// then catch
// function onClick() {
//   page += 1;

//   getPhotos(imgPhoto, page).then(data => {
//     gallery.insertAdjacentHTML('beforeEnd', createGalleryMarkup(data.hits));

//     const { height: cardHeight } = document
//       .querySelector('.gallery')
//       .firstElementChild.getBoundingClientRect();

//     window.scrollBy({
//       top: cardHeight * 2,
//       behavior: 'smooth',
//     });

//     const lastPages = Math.ceil(data.totalHits / per_page);
//     if (lastPages === page) {
//       loadBtn.classList.add('is-hidden');
//       iziToast.info({
//         message: `That's all!`,
//         position: 'topRight',
//       });
//     }
//   });
// }
