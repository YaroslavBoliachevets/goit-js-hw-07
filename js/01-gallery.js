import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const divImgEl = document.querySelector('.gallery');

const createGalleryMurkup = galleryItems
  .map(({ preview, original, description }) => {
    return `
	<a class="gallery__link" href="${original}" >
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
	`;
  })
  .join('');

divImgEl.insertAdjacentHTML('afterbegin', createGalleryMurkup);

divImgEl.addEventListener('click', onGalleryClick);

function onGalleryClick(e) {
  e.preventDefault();
  
  const isImg = e.target.classList.contains('gallery__image');

  if (!isImg) {
    return;
  }

  makeModalWindow(e.target.dataset.source);

}

function makeModalWindow(url) {
  const instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
`);

  instance.show();
}
