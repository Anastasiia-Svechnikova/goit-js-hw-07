import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');

function makeGalleryItemMarkup({ preview, original, description }) {
	return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}}"
    />
  </a>
</div>`;
}
function makeGalleryMarkup(arr) {
	return arr.map(makeGalleryItemMarkup).join('');
}
function renderMarkup(markup) {
	galleryRef.insertAdjacentHTML('afterbegin', markup);
}
const galleryMarkup = makeGalleryMarkup(galleryItems);
renderMarkup(galleryMarkup);

galleryRef.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(e) {
	e.preventDefault();

	const modalOptions = {
		onShow: () => {
			window.addEventListener('keydown', onEscapeKeyDown);
		},
		onClose: () => {
			window.removeEventListener('keydown', onEscapeKeyDown);
		},
	};

	// eslint-disable-next-line no-undef
	const modal = basicLightbox.create(`<img  src="${e.target.dataset.source}"width="1400" height="900">`, modalOptions);

	function onEscapeKeyDown(e) {
		if (e.code === 'Escape') {
			modal.close();
		}
	}
	modal.show();
}
