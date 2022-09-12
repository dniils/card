let buttonColor = document.querySelector('.button_color');
let buttonColor2 = document.querySelector('.button_color_2');
let containers = document.querySelectorAll('.container');
let htmlBody = document.querySelector('body');
// let pageColor = htmlBody.style.backgroundColor;

let counter = 0;
let colors = [
  'teal',
  'tan',
  'silver',
  'lightslategrey',
  'papayawhip',
  'indigo',
  'darkslateblue',
  '#333',
];
buttonColor.style.backgroundColor = colors[counter];

let changeColorFunction = function () {
  htmlBody.style.backgroundColor = colors[counter];
  buttonColor.style.backgroundColor = colors[counter + 1];

  console.log('counter is: ' + counter + '. Color is ' + colors[counter]);
  counter++;

  if (counter == colors.length) {
    counter = 0;
    buttonColor.style.backgroundColor = colors[0];
  }
};

buttonColor.onclick = changeColorFunction;

let counter2 = 0;
let colors2 = [
  '#fff2f2',
  '#fffced',
  '#f1ffed',
  '#edfffe',
  '#f1edff',
  '#ffedff',
  '#ffeded',
  'rgb(255, 254, 234)',
];

buttonColor2.style.backgroundColor = colors2[counter2];

let changeColorFunction2 = function () {
  //   containers[1].style.backgroundColor = colors2[counter2];

  for (let n = 0; n < containers.length; n++) {
    containers[n].style.backgroundColor = colors2[counter2];
  }

  buttonColor2.style.backgroundColor = colors2[counter2 + 1];

  console.log('counter2 is: ' + counter2 + '. Color2 is ' + colors2[counter2]);
  counter2++;

  if (counter2 == colors2.length) {
    counter2 = 0;
    buttonColor2.style.backgroundColor = colors2[0];
  }
};

buttonColor2.onclick = changeColorFunction2;
