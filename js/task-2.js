const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
]; 

// const ulElement = document.querySelector(".gallery");


// images.forEach(function(image) {
//   const liElement = document.createElement("li");
//   const imgElement = document.createElement("img");
  
//   liElement.classList.add("gallery-element");
//   imgElement.classList.add("gallery-img");
  

//   document.body.append(liElement , imgElement);
 
//   imgElement.src = image.url;
//   imgElement.alt = image.alt;

  
//   liElement.appendChild(imgElement);
//   // ulElement.appendChild(liElement);
 

// console.log(liElement);
 
// });
//  console.log(ulElement);

  const gallery = document.querySelector('.gallery');

  const galleryItems = images.map(image => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = image.url;
    img.alt = image.alt;
    li.appendChild(img);
    return li;
  });

  gallery.append(...galleryItems);

