var indexValue = 1;
showimg(indexValue);
function slide(e) {showimg(indexValue = e)} ;
function slide_direction(e) {showimg(indexValue += e)} ;
function showimg(e) {
    var i;
    const img = document.querySelectorAll('#sliderimages img');
    const sliders = document.querySelectorAll('.radio-cat span');
    if (e > img.length) {
       indexValue = 1;
    }
    if (e < 1) {
        indexValue = img.length;
    }
    for (i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }
     
    img[indexValue -1].style.display = "block";
    
}