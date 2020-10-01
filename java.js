console.log('hello World!');




var i = 0;
var images = [];
var time = 2000;

images[0] = 'PHOTO-2020-10-01-04-03-48.jpg';
images[1] = 'PHOTO-2020-10-01-04-01-24.jpg';
images[2] = 'PHOTO-2020-10-01-04-03-49.jpg';

function changeImg(){
  document.slide.src = images[i];

  if(i < images.length - 1){

    i++;
  }  else {
      i= 0;

    }
    setTimeout("changeImg()", time);

}
window.onload = changeImg;
