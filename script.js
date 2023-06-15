function resetColor(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach( box => {
        box.style.backgroundColor = "black";
    });
}


const body = document.querySelector('body');

const divContainer = document.createElement('div');

divContainer.classList.add('container');


for( i =1; i <= 256; i++){
    const div = document.createElement('div');
    div.classList.add('box');
    div.id = 'box-'+i;

    div.addEventListener('mouseover', (e) => {
        div.style.backgroundColor = "white";
    });
    divContainer.appendChild(div);
}

body.appendChild(divContainer);

const resetButton = document.createElement('button');
resetButton.textContent = "Reset";
resetButton.addEventListener('click', resetColor);
body.appendChild(resetButton);