const loader = document.querySelector('.js-loader');

export function createGalleryMarkup(array) {
  return array
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) =>
        `<li class="gallery-items">      
          <div class="gallery-item">
            <a  href="${largeImageURL}">
            <img  data-source=${largeImageURL} src="${webformatURL}" alt="${tags}" >
           </a>
          </div>
          <div class="photo-info">
            <div>
             <p class="photo-title">Likes:</p> 
             <p class="photo-num"> ${likes}</p>
            </div>
            <div>
              <p class="photo-title">Views:</p>
              <p class="photo-num"> ${views}</p>
            </div>
            <div>
             <p class="photo-title">Comments:</p>
             <p class="photo-num"> ${comments}</p>
            </div>
            <div>
             <p class="photo-title">Downloads:</p>
             <p class="photo-num"> ${downloads}</p>
            </div>
          </div>
      </li>`
    )
    .join('');
}

export function showLoader() {
  loader.classList.remove('is-hidden');
}

export function hiddeLoader() {
  loader.classList.add('is-hidden');
}












// export function displayImages(images) {
//     const gallery = document.getElementById('gallery');
//     gallery.innerHTML = '';
  
//     images.forEach(image => {
//       const imgLink = document.createElement('a');
//       imgLink.href = image.largeImageURL;
  
//       const imgElement = document.createElement('img');
//       imgElement.src = image.webformatURL;
//       imgElement.alt = image.tags;
  
//       imgLink.appendChild(imgElement);
//       gallery.appendChild(imgLink);
//     });
  
//     // Оновлення галереї SimpleLightbox
//     const lightbox = new SimpleLightbox('.gallery a');
//     lightbox.refresh();
//   }