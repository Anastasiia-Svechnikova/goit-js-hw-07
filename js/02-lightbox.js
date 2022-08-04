import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');

function makeGalleryItemMarkup({ preview, original, description }) {
	return `<li>
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a></li>`;
}

function makeGalleryMarkup(arr) {
	return arr.map(makeGalleryItemMarkup).join('');
}
function renderMarkup(markup) {
	galleryRef.insertAdjacentHTML('afterbegin', markup);
}
const galleryMarkup = makeGalleryMarkup(galleryItems);
renderMarkup(galleryMarkup);
// eslint-disable-next-line no-undef, no-unused-vars
const instance = new SimpleLightbox('.gallery a', {
	overlayOpacity: 0.6,
	captions: true,
	captionSelector: 'img',
	captionType: 'attr',
	captionsData: 'alt',
	captionPosition: 'bottom',
	captionDelay: 250,
	captionClass: 'ch',
});
