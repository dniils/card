let buttonPrev = document.querySelector('#gallery .buttons .buttonPrev');
let buttonNext = document.querySelector('#gallery .buttons .buttonNext');
let images = document.querySelectorAll('#gallery .gallery_photos img');
let i = 0; // counter

let buttonImage = document.querySelector('#gallery .gallery_photos');

// Slider. Using display: none | block
/*
buttonPrev.onclick = function() {
    images[i].style.display = 'none';
    i--;

    if(i < 0){
        i = images.length - 1;
    }

    images[i].style.display = 'block';
}

buttonNext.onclick = function() {
    images[i].style.display = 'none';
    i++;

    if(i >= images.length){
        i = 0;
    }

    images[i].style.display = 'block';
}
*/

// Slider. Using class .active with opacity=1
buttonPrev.onclick = function () {
  // images[i].className = ''
  images[i].classList.toggle('active');
  i--;

  if (i < 0) {
    i = images.length - 1;
  }

  // images[i].className = 'active'
  images[i].classList.toggle('active');
};

buttonNext.onclick = function () {
  // images[i].className = ''
  images[i].classList.toggle('active');
  i++;

  if (i >= images.length) {
    i = 0;
  }

  // images[i].className = 'active'
  images[i].classList.toggle('active');
};

/*   свернуть 2 верхних действия в одну функцию, и просто подставить в одной +1, в др -1

function fun1(k) {
    images[i].classList.toggle('active');
    i = i + k;

    if(i < 0 || i>=images.length5){
        i = k? i = 0 : i = images.length - 1;
    }

    // images[i].className = 'active'
    images[i].classList.toggle('active');
}

// тернарный оператор ? -- google it!

*/
