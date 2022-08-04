import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

function makeGalleryItemMarkup({ preview, original, description }) {
	return `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
}

function makeGalleryMarkup(arr) {
	return arr.map(makeGalleryItemMarkup).join('');
}
function renderMarkup(markup) {
	galleryRef.insertAdjacentHTML('afterbegin', markup);
}
const galleryMarkup = makeGalleryMarkup(galleryItems);
renderMarkup(galleryMarkup);
// eslint-disable-next-line no-undef
const instance = new SimpleLightbox('.gallery a', {
	captions: true,
	captionSelector: 'img',
	captionType: 'attr',
	captionsData: 'alt',
	captionPosition: 'bottom',
	captionDelay: 250,
	captionClass: 'ch',
});
instance.open();
