import { galleryItems } from './gallery-items.js';
const galleryEl = document.querySelector('.gallery');


const createGallery = galleryItems.map(({ preview, original, description }) => {
  return `<div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class ="gallery__image" src="${preview}" alt="${description}">
      </a>
      </div>`;
}).join('')

galleryEl.innerHTML = createGallery;



function onLinkUrlClick(event) {
  event.preventDefault()
  if (event.target.parentElement.nodeName !== "A") {
    return
  } else {
    const linkelement = event.target.closest('.gallery__link').href;

    const instance = basicLightbox.create(`
    <img src="${linkelement}" width="800" height="600">`)
    instance.show()

    
    window.addEventListener('keydown', onKeyPress);

    function onKeyPress(event) {

      if (event.code === 'Escape') {
        window.removeEventListener('keydown', onKeyPress)
        instance.close() 
      }
    }
  }
  

}


galleryEl.addEventListener('click', onLinkUrlClick)
// console.log(linkelement)





// import * as basicLightbox from 'basiclightbox'






// Change code below this line
// let creatGaleru =""
//   galleryItems.forEach(({ preview, original, description }) => {
//     const result = 
//     `<div class="gallery__item">
//       <a class="gallery__link" href="${original}">
//         <img class ="gallery__image" src="${preview}" alt="${description}">
//       </a>
//       </div>`;
//     creatGaleru += result;
// })

// galleryEl.innerHTML = creatGaleru;


// const linkElement = document.querySelector(".gallery__link");

// function getUrlLinkElement(event) {
//  console.log (linkElement.href) 
// }

// linkElement.addEventListener('click', getUrlLinkElement)




// const blabla = ({ preview, original, description }) => {

//   const divElement = document.createElement('div');
//         divElement.classList.add('gallery__item');

  
//   const linkElement = document.createElement('a');
//         linkElement.classList.add('gallery__link');
//         linkElement.href = original;

//   const imgElement = document.createElement('img');
//         imgElement.classList.add('gallery__image');
//         imgElement.src = preview;
//         imgElement.alt = description;

//   linkElement.append(imgElement)
//   divElement.append(linkElement)

//   return divElement;

  
// }

// const element = galleryItems.map(blabla);
// galleryEl.append(...element);

