
const grid = document.querySelector('.container')

const range_input = document.querySelector('#grid_size')
const color = document.querySelector('#color-palette')

console.log(color.value)

function generateGrids(size) {

    let columns = 'auto'

    for (let i = 1; i < size; i++) {
        columns = columns + ' auto'
    }
    console.log(columns)

    grid.style['grid-template-columns'] = columns

    for (let i = 0; i < size * size; i++) {
        const griddy = document.createElement('div');
        //griddy.style['border'] = '0.5px solid black'
        grid.append(griddy);
    }
}

generateGrids(range_input.value)





