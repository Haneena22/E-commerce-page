/*gallery
const mainImages = document.querySelectorAll(".default .main-img img");
const listImgs = document.querySelectorAll(".default .list-imgs div");
const lightboxMainImages = document.querySelectorAll(".lightbar .main-img img");
const lightboxListImages = document.querySelectorAll(
  ".lightbar .list-imgs div"
);

const lightbox = document.querySelector(".lightbox");
const iconClose = document.querySelector(".icon-close");
const iconPrev = document.querySelector(".icon-prev");
const iconNext = document.querySelector(".icon-next");

let currentIndex = 0;

const changeImage = (index, mainImages, listImgs) => {
  mainImages.forEach((img) => {
    img.classList.remove("active");
  });
  listImgs.forEach((item) => {
    item.classList.remove("active");
  });
  mainImages[index].classList.add("active");
  listImgs[index].classList.add("active");
  currentIndex = index;
};

listImgs.forEach((item, index) => {
  item.addEventListener("click", () => {
    changeImage(index, mainImages, listImgs);
  });
});
lightboxListImages.forEach((photo, index) => {
  photo.addEventListener("click", () => {
    changeImage(index, lightboxMainImages, lightboxListImages);
  });
});
mainImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    changeImage(index, lightboxMainImages, lightboxListImages);
  });
});

iconPrev.addEventListener("click", () => {
  if (currentIndex <= 0) {
    changeImage(mainImages.length - 1, lightboxMainImages, lightboxListImages);
  } else {
    changeImage(currentIndex - 1, lightboxMainImages, lightboxListImages);
  }
});
iconNext.addEventListener("click", () => {
  if (currentIndex >= mainImages.length - 1) {
    changeImage(0, lightboxMainImages, lightboxListImages);
  } else {
    changeImage(currentIndex + 1, lightboxMainImages, lightboxListImages);
  }
});

iconClose.addEventListener("click", () => {
  lightbox.classList.remove("active");
});*/

const mainImages = document.querySelectorAll(".default .main-img img");
const thumbnails = document.querySelectorAll(".default .list-imgs div");
const lightboxMainImages = document.querySelectorAll(".lightbox .main-img img");
const lightboxThumbnails = document.querySelectorAll(
  ".lightbox .list-imgs div"
);
const lightbox = document.querySelector(".lightbox");
const iconClose = document.querySelector(".icon-close");
const iconPrev = document.querySelector(".icon-prev");
const iconNext = document.querySelector(".icon-next");

let currentImageIndex = 0;

const changeImage = (index, mainImages, thumbnails) => {
  mainImages.forEach((img) => {
    img.classList.remove("active");
  });
  thumbnails.forEach((thumb) => {
    thumb.classList.remove("active");
  });

  mainImages[index].classList.add("active");
  thumbnails[index].classList.add("active");
  currentImageIndex = index;
};

thumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    changeImage(index, mainImages, thumbnails);
  });
});

lightboxThumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    changeImage(index, lightboxMainImages, lightboxThumbnails);
  });
});

mainImages.forEach((img, index) => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    changeImage(index, lightboxMainImages, lightboxThumbnails);
  });
});

iconPrev.addEventListener("click", () => {
  if (currentImageIndex <= 0) {
    changeImage(mainImages.length - 1, lightboxMainImages, lightboxThumbnails);
  } else {
    changeImage(currentImageIndex - 1, lightboxMainImages, lightboxThumbnails);
  }
});

iconNext.addEventListener("click", () => {
  if (currentImageIndex >= mainImages.length - 1) {
    changeImage(0, lightboxMainImages, lightboxThumbnails);
  } else {
    changeImage(currentImageIndex + 1, lightboxMainImages, lightboxThumbnails);
  }
});

iconClose.addEventListener("click", () => {
  lightbox.classList.remove("active");
});
