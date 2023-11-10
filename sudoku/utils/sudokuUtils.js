export function fillGrid(sudokuValues){
    //Converts a 1D 1x81 Array into a 9x9 array

    

    const zeros = (m, n) => [...Array(m)].map(e => Array(n).fill(0));
    const sudokuGrid = zeros(9,9);
    let index = 0

    for (let i = 0; i < 9; i++){
        for(let j=0; j < 9; j++){
            sudokuGrid[i][j] = sudokuValues[index];
            index++;
        }
    }
    return sudokuGrid;
}