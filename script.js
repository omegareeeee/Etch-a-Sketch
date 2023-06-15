function resetColor(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach( box => {
        box.style.backgroundColor = "black";
    });
}

function createGrid(size){
    const divContainer = document.createElement('div');
    for( i =1; i <= size; i++){
        const row = document.createElement('div');
        for(j = 1 ; j <= size; j++){
            const div = document.createElement('div');
            div.classList.add('box');
            div.id = 'box-'+i;
            div.style.width = "px";
            div.style.height ="px";
            div.addEventListener('mouseover', (e) => {
                div.style.backgroundColor = "white";
            });
            row.appendChild(div);
        }
        divContainer.appendChild(row);
    }
    
    return divContainer;
}

const body = document.querySelector('body');

const divContainer = document.createElement('div');

divContainer.classList.add('container');


for( i =1; i <= 16; i++){
    const row = document.createElement('div');
    for(j = 1 ; j <= 16; j++){
        const div = document.createElement('div');
        div.classList.add('box');
        div.id = 'box-'+i;
        div.style.width = "50px";
        div.style.height ="50px";
        div.addEventListener('mouseover', (e) => {
            div.style.backgroundColor = "white";
        });
        row.appendChild(div);
    }
    divContainer.appendChild(row);
}

body.appendChild(divContainer);

const resetButton = document.createElement('button');
resetButton.textContent = "Reset";
resetButton.addEventListener('click', resetColor);
body.appendChild(resetButton);