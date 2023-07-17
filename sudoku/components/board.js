import style from "../src/styles/sudoku.module.css"
export default function Board(data) {
  const board = data.board
  const solved = data.solved
  return (
    <>
      <p>Board:</p>
      <p>{board}</p>
      <p>Solved Board:</p>
      <p>{solved}</p>

      {
        board.map( function(row){
          return  row.map(function(cells){
            return (<div className={style.box}>
                <p>cells</p>
            </div>)
          })
        })
      }
    </>
  );
}
            
        </>
    )

}
