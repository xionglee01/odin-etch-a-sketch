const container = document.querySelector(".container");
const slider = document.getElementById("gridRange");
const output = document.querySelector(".out");
const colorpicker = document.getElementById("colorpicker");


let row = slider.value;
let col = slider.value;
let containerWidth = parseFloat(getComputedStyle(container).width);

output.innerText = `${row} x ${col}`;

function createGrid()
{
    for(let i = 0; i < row; i++)
    {
        let row_grid = document.createElement("div");
        for(let j = 0; j < col; j++)
        {
            let column_grid = document.createElement("div");
            column_grid.setAttribute("class","box");
            column_grid.style.width = `${containerWidth/row}px`;
            column_grid.style.height = `${containerWidth/col}px`;
            // console.log(column_grid.style.width)
            row_grid.appendChild(column_grid);
            
        }
        container.appendChild(row_grid);
    }
}
window.onload = createGrid();

const grid = document.querySelectorAll(".box");

function deleteGrid()
{
    while(container.firstChild)
    {
        container.removeChild(container.lastChild);
    }
    createGrid();
}

function changeGrid()
{
    row = this.value;
    col = this.value;
    output.innerText = `${row} x ${col}`;
    deleteGrid(); 
}


function changeColor(e)
{
    if(e.target.className === 'box')
    {
        e.target.style.backgroundColor = colorpicker.value;
    }
}

function changeColorHold(e)
{
    if(e.buttons > 0)
    {
        if(e.target.className === 'box')
        {
            e.target.style.backgroundColor = colorpicker.value;
        }
    }
}

slider.oninput = changeGrid;
grid.forEach(box => addEventListener('mousedown', changeColor));
grid.forEach(box => addEventListener('mouseover', changeColorHold));