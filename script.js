function resetColor(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach( box => {
        box.style.backgroundColor = "black";
    });
}

function removeAllBoxes(){
    const boxes = document.querySelector(".container");
    boxes.remove();
}

function createGrid(size){
    const divContainer = document.createElement('div');
    divContainer.classList.add('container');
    for( i =1; i <= size; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        for(j = 1 ; j <= size; j++){
            const div = document.createElement('div');
            div.classList.add('box');
            div.id = 'box-'+i;
            div.style.width = (500/size) +"px";
            div.style.height =(500/size) +"px";
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

let size = -10;
while (!(size > 0 && size <= 100 )){
    size = prompt("Size of Grid? (must be 1 - 100)");
}

const buttons = document.createElement('div');
buttons.classList.add("buttons");

const resetButton = document.createElement('button');
resetButton.textContent = "Reset";
resetButton.addEventListener('click', resetColor);
buttons.appendChild(resetButton);

const changeSizeButton = document.createElement('button');
changeSizeButton.textContent = "Change Size";
changeSizeButton.addEventListener('click', () => {
    removeAllBoxes();
    let size = -10;
    while (!(size > 0 && size <= 100 )){
        size = prompt("Size of Grid? (must be 1 - 100)");
    }
    body.appendChild(createGrid(size));
});
buttons.appendChild(changeSizeButton);

body.appendChild(buttons);


body.appendChild(createGrid(size));