let img = document.getElementById('img');
let indicator = document.getElementById('indicator');
let num = 0;
let arr_img = [
    {
        'src':'Images_slider/image.png',
        'alt': 'картинка1'
    },
    {
        'src': 'Images_slider/image2.jpg',
        'alt': 'картинка2'
    },
    {
        'src': 'Images_slider/image.png',
        'alt': 'картинка3'
    },
    {
        'src': 'Images_slider/image2.jpg',
        'alt': 'картинка4'
    }
];

let getIndicator = () => {
    indicator.innerHTML = '';
    arr_img.forEach(function(item, index, array) {
        let indic_img = document.createElement('img');
        if (index == num) {
            indic_img.src = 'Images_slider/image3.png'
        } else {
            indic_img.src = 'Images_slider/2.png'
        }
        indic_img.classList.add('indicatorimg');
        indicator.appendChild(indic_img);
    });
}


let startSlider = () => {
    if (num > arr_img.length - 1) {
        num = 0;
    }
    img.alt = arr_img[num].alt;
    img.src = arr_img[num].src;
    getIndicator();
    num++;
}

startSlider();

setInterval(startSlider, 4000);