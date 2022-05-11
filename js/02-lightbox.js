import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divImgEl = document.querySelector('.gallery');

const makeGalleryItemMurkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
  <li class="gallery__item">
    <a  href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
</li>
	`;
  })
  .join('');

divImgEl.insertAdjacentHTML('beforeend', makeGalleryItemMurkup);

let gallery = new SimpleLightbox('.gallery a', { captionsData:'alt', captionDelay: 250 });