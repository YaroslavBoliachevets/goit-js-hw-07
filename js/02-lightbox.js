import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divImgEl = document.querySelector('.gallery');

const makeGalleryItemMurkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
	<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
	`;
  })
  .join('');

divImgEl.insertAdjacentHTML('beforeend', makeGalleryItemMurkup);

divImgEl.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();

  const isImg = e.target.classList.contains('gallery__image');

  if (!isImg) {
    return;
  }

  let gallery = new SimpleLightbox('.gallery a', { captionsData:'alt', captionDelay: 250 });
}
