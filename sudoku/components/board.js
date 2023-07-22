import style from "../src/styles/sudoku.module.css";
export default function Board(data) {
  const board = data.board;
  const solved = data.solved;
  return (
    <>
      <p>Board:</p>
      <p>{board}</p>
      <p>Solved Board:</p>
      <p>{solved}</p>

      <div className={style.gridContainer}>
        {board.map(function (row, rowIndex) {
          return row.map(function (cell, cellIndex) {
            console.log(cellIndex)
            if(cell == 0){
              return(
                <div key={cellIndex} className={style.box}>
                  <input maxLength="1" />
                </div>
              );
            }
            else{
              return (
                <div key={cellIndex} className={style.correctbox}>
                  <p>{cell}</p>
                </div>
              );
            }
            
          });
        })}
      </div>
    </>
  );
}
