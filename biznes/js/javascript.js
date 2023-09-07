const burger = document.getElementById('burger');
const container = document.getElementById('container');
const lang = document.getElementsByTagName('lang');
const touch_button = document.getElementById('touch_button');
light = document.getElementById('light');

touch = document.getElementById('touch');
menu = document.getElementById('menu');
body = document.getElementById('body');

let bolen = false;
let touch_number = false;

burger.onclick = function (event) {
    if (!bolen) {

        console.log('burger');
        container.style.marginTop = "-45px ";
        container.style.transition = "all 0.8s ease";
        bolen = true;

    }


    else {

        container.style.marginTop = "-300px";
        container.style.transition = "all 0.8s ease";
        bolen = false;

    }
}

touch_button.onclick = function (event) {


    if (!touch_number) {
        console.log('light');
        touch.style.marginTop = '-20px';

        
        setTimeout(() => {
            touch.style.marginTop = '-100px';
        }, 500);
        light.style.display = "block";
        touch.style.transition = "all 0.5s ease";
        menu.style.display = "block";
        body.style.display = "block";


        touch_number = true;
    }

    else {
        console.log('no');


        touch.style.marginTop = '-20px';

        setTimeout(() => {
            touch.style.marginTop = '-150px';
        }, 500);
        light.style.display = "none";
        touch.style.transition = "all 0.5s ease";
        menu.style.display = "none";
        body.style.display = "none";
        touch_number = false;
    }

}

