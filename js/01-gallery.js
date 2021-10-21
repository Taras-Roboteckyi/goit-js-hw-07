import { galleryItems } from './gallery-items.js';
// Change code below this line

//console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery');

galleryContainer.addEventListener('click', onSelectImage);


//Створення і рендер розмітки 

function renderImages() {
    const markup = galleryItems
        .map(
            ({preview, original, description}) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join('');
    galleryContainer.insertAdjacentHTML('beforeend', markup);
    //console.log(galleryContainer);
}
renderImages();

// Отримання url великого зображення 

function onSelectImage(event) {
  event.preventDefault();
  const imageUrl = event.target.dataset.source;
  //console.log(imageUrl)
  const instance = basicLightbox.create(`
    <img src="${imageUrl}" width="800" height="600">
`)

  instance.show()
  
  //Закриття кнопкою Escape

  document.addEventListener('keydown', onSelectButtonEscape)
    function onSelectButtonEscape (event) {
      if (event.key === 'Escape') { 
      document.removeEventListener('keydown', onSelectButtonEscape)
      instance.close();
      }
  }
   
}







