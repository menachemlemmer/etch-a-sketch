const submit = document.querySelector('#submit');
const input = document.querySelector('#size');

submit.addEventListener('click', () => {
    let size = input.value;
    buildGrid(size);
})

document.querySelector('#clear').addEventListener('click', () => {
    let size = input.value;
    buildGrid(size);
})

let color = "black";

function getRandomColor() {
    return ("#" + Math.floor(Math.random()*16777215).toString(16));
}

document.querySelector('#white').addEventListener('click', () => {
    color = "white";
})
document.querySelector('#black').addEventListener('click', () => {
    color = "black";
})
document.querySelector('#rainbow').addEventListener('click', () => {
    color = "rainbow";
})
document.querySelector('#eraser').addEventListener('click', () => {
    color = "rgb(6, 190, 175)";
})

function buildGrid(size) {
    if (isNaN(size) || size < 0 || size > 100) {
        alert("Must be a number between 1 and 100");
        return;
    }
    document.querySelector('.grid').textContent = '';
    for (let i = 0; i < size; i++) {
        let lines = document.createElement('div');
        lines.classList.add('line');
        document.querySelector('.grid').appendChild(lines);
        for (let j = 0; j < size; j++) {
            let columns = document.createElement('div');
            columns.classList.add('columns')
            lines.appendChild(columns);
            columns.addEventListener('mouseover', () => {
                if (color == "rainbow") {
                    columns.style.background = getRandomColor();
                }
                else {
                    columns.style.background = color;
                }    
            })

        }
    }
}    