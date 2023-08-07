const button = document.querySelector('.button');
const mainContainer = document.querySelector('.main-container');
const colorCodeTag = document.querySelector('.color-code');
const simpleOptionButton = document.querySelector('.option-button-simple');
const hexOptionButton = document.querySelector('.option-button-hex');

button.addEventListener('click',()=>{updateColor()});
simpleOptionButton.addEventListener('click',()=>{updateModeSimple()})
hexOptionButton.addEventListener('click', ()=>{updateModeHex()});

let simpleSelected = true;

const colorHexArraySimple = ['#F5C6CB', '#FFD3B5', '#FFE8A3', '#E2F0CB', '#B5EAD7', '#C7CEEA', '#D5A6BD', '#F5B2C8', '#F9D1C9', '#FDE2E4'];
let index = 0;

function updateModeSimple(){
    simpleSelected = true;
    console.log(simpleSelected);
};

function updateModeHex(){
    simpleSelected = false;
    console.log(simpleSelected);
};

function getSimpleHexColor(){
    
    let color;

    if(index === colorHexArraySimple.length){
        index =0;
    };
    color = colorHexArraySimple[index];
    index ++;
    return color;
};

function updateColor(){
    let color;
    if(simpleSelected){
        color = getSimpleHexColor();
        document.body.style.backgroundColor = color;
        updateColorTag(color);
    }else if(!simpleSelected){
        color = randomColorGenerator();
        document.body.style.backgroundColor = color;
        updateColorTag(color);
    };  
};

function updateColorTag(string){
    colorCodeTag.innerHTML = string;
    colorCodeTag.style.color = string;
};

function randomColorGenerator(){
    let random;
    let i = 0;
    let color;
    let rgb;
    
    if(Math.random() < 0.5){

        color = '#';

        while(i < 6){
            random = Math.floor(Math.random()*16);
            if(random <= 9){
                color += random.toString();
            }else if(random === 10){
                color += 'A';
            }else if(random === 11){
                color += 'B';
            }else if(random === 12){
                color += 'C';
            }else if(random === 13){
                color += 'D';
            }else if(random === 14){
                color += 'E';
            }else if(random === 15){
                color += 'F';
            };
            i++;
        };
    }else{
        color = 'rgb(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ')';
    };
    console.log(color);
    return color;
};

