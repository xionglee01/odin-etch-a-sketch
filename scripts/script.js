const container = document.querySelector(".container");

let row = 16;
let column = 16;

let test = getComputedStyle(container);
let num = parseFloat(test.width);

function createGrid()
{
    for(let i = 0; i < row; i++)
    {
        let row_grid = document.createElement("div");
        for(let j = 0; j < column; j++)
        {
            let column_grid = document.createElement("div");
            column_grid.setAttribute("class","box");
            column_grid.style.width = `${num/row}px`;
            column_grid.style.height = `${num/column}px`;
            console.log(column_grid.style.width)
            row_grid.appendChild(column_grid);
            
        }
        container.appendChild(row_grid);
    }
}


createGrid();

const grid = document.querySelectorAll(".box");


console.log(test.width);

function deleteGrid()
{
    while(container.firstChild)
    {
        container.removeChild(container.lastChild);
    }
}

function changeGrid()
{
    let new_gridsize = prompt("Enter a number for grid size (MAX 100): ", 16);
    row = new_gridsize;
    column = new_gridsize;
    deleteGrid();
    createGrid();
}


function changeColor(e)
{
    if(e.target.className === 'box')
    {
        e.target.style.backgroundColor = "black";
    }
}

function changeColorHold(e)
{
    if(e.buttons > 0)
    {
        if(e.target.className === 'box')
        {
            e.target.style.backgroundColor = "black";
        }
    }
}


grid.forEach(box => addEventListener('mousedown', changeColor));
grid.forEach(box => addEventListener('mouseover', changeColorHold));