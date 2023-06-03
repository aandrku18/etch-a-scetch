
const grid = document.querySelector('.container')

let range_input = document.querySelector('#grid_size')
let range_input_div = document.querySelector('#rangeinput')
let color = document.querySelector('#color-palette')
let grid_size_text = document.querySelector('#grid_size_text')
let body = document.querySelector('body')

let mouseDown = 0;

body.addEventListener('mousedown', () => mouseDown = true)
body.addEventListener('mouseup', () => mouseDown = false)


function generateGrids() {

    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }

    let size = range_input.value

    grid_size_text.textContent = `Grid size: ${size} x ${size}`

    let columns = 'auto'

    for (let i = 1; i < size; i++) {
        columns = columns + ' auto'
    }
    

    grid.style['grid-template-columns'] = columns

    for (let i = 0; i < size * size; i++) {
        const griddy = document.createElement('div');
        //griddy.style['border'] = '0.5px solid black'
        grid.append(griddy);
    }

    let grids = document.querySelectorAll('.container div')

    for (let i = 0; i < grids.length; i++) {
        grids[i].addEventListener('mousemove', function(e) {
            if (mouseDown) this.style['background-color'] = color.value
        })
    }
}

range_input.addEventListener('change', function() {
    generateGrids()
})

generateGrids()









