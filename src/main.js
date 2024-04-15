// Описаний у документації
import iziToast from "izitoast";
// Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

// Описаний у документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

import { getPhotos } from "./js/pixabay-api.js";
import { createGalleryMarkup } from "./js/render-function.js";
import { showLoader, hiddeLoader } from "./js/render-function.js";

 const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });


 const gallery = document.querySelector(".gallery");
 const form = document.querySelector(".js-form");
 const loader = document.querySelector(".js-loader");



  
  form.addEventListener("submit", onSubmit);
  
  function onSubmit(event) {
    event.preventDefault();
    const imgPhoto = event.currentTarget.elements.search.value.trim();
    showLoader();
    gallery.innerHTML = '';
    if (!imgPhoto) {
        gallery.innerHTML = '';
        hiddeLoader();
        event.target.reset();
        return iziToast.error({
          message: `Sorry, there are no images matching your search query. Please try again!`,
          position: 'topRight',
        });
      }  
  
  
  getPhotos(imgPhoto)
  .then(data => {
    if (data.hits.length === 0) {
      gallery.innerHTML = '';
      event.target.reset();
      return iziToast.error({
        message: `Sorry, there are no images matching your search query. Please try again!`,
        position: 'topRight',
      });
    }

      gallery.innerHTML = createGalleryMarkup(data.hits);
      lightbox.refresh();
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      hiddeLoader();
    });
  form.reset();
}





 

