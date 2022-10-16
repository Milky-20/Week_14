// var imageArray = [
//     "img/gelik1.jpg",
//     "img/gelik2.jpg",
//     "img/gelik3.jpg",
//     "img/gelik4.jpg"
// ];
// window.number = '0';
//  var imageCount = imageArray.length;
//  function image(num){
// if(num==1){
//     if(number < imageCount - 1){
//         number++;
//         document.getElementById ('images').src = imageArray[number];
//         document.getElementById('num_img').innerHTML = number + 1 +
//         '/' + imageCount;
//     }
// } else {
// if (number > 0){
//     number--;
//     document.getElementById ('images').src = imageArray[number];
//     document.getElementById('num_img').innerHTML = number + 1 +
//     '/' + imageCount;
// }
// }
// }
//  function btn_show() {
// if (number!=0)
// document.getElementById('left').style.display='block';
// if (number!=imageCount-1)
// document.getElementById('right').style.display='block';
//  }
//  function btn_noshow(){
//     document.getElementById('left').style.display='none';
//     document.getElementById('right').style.display='none';
//  }
//  document.write('<img id="images" src="'+imageArray[0]+'">');

function showImg(event)
{
    event = event || window.event; // получаем объект события
    var iconImg = event.Target || event.srcElement; // определяем текущий объект
    if (iconImg.tagName == "IMG"){ // если тип элемента - изображение, то
        document.getElementById("bigImg").src = iconImg.getAttribute('src');  // меняем значение src у элемента с id="bigImg" на src текущего объекта 
    }
} 