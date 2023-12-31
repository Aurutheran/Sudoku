import style from "../src/styles/sudoku.module.css";

import { fillGrid } from "../utils/sudokuUtils";
import { useEffect, useState} from "react";
export default function Board(data) {
  const initialBoard = [].concat(...data.board);
  const solved = data.solved;

  const [sudokuValues, setSudokuValues] = useState(initialBoard); //Initialize sudokuValue's with board
  const [sudokuGrid, setSudokuGrid] = useState(() => fillGrid(initialBoard));

  const updateCellValue = (row, col, value) => {
    if (initialBoard[row * 9 + col] === 0) {
      const newSudokuValues = [...sudokuValues];
      newSudokuValues[row * 9 + col] = value;
      setSudokuValues(newSudokuValues);
      const newSudokuGrid = fillGrid(newSudokuValues);
      setSudokuGrid(newSudokuGrid);//
      
    }
  };
  useEffect( () => {
    data.onDataUpdate(sudokuGrid);
  }, [sudokuGrid]);


  const handleCellChange = (row, col, e) =>{
    const newValue = Math.abs(parseInt(e.target.value, 10) || 0) % 10;
    updateCellValue(row, col, newValue);
  };


  
  const renderSudokuBoard = () => {
    return (
      <table className="mx-auto border-collapse border-4 border-solid border-black shadow-xl shadow-slate-900/50 bg-white">
        <tbody>
          {sudokuGrid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cellValue, colIndex) => (
                <td
                  key={colIndex}
                  className={`w-10 h-10 ${colIndex % 3 === 0 ? 'border-l-4' : ''} ${
                    rowIndex % 3 === 0 ? 'border-t-4' : ''
                  } border-black`}
                >
                  <input
                    className={`w-20 h-20 text-center text-xl ${
                      initialBoard[rowIndex * 9 + colIndex] !== 0
                        ? 'text-gray-700 font-bold drop-shadow-xl' // Add special styles for initial values
                        : 'text-black font-bold drop-shadow-xl shadow-blue-600/50'
                    }`}
                    type="number"
                    value={cellValue || ''}
                    onChange={(e) => handleCellChange(rowIndex, colIndex, e)}
                    readOnly={initialBoard[rowIndex * 9 + colIndex] !== 0}
                  />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  

  return (
    <div>
      <p>Board:</p>
      <p>{initialBoard}</p>

      <p>Updated Board: </p>
      <p>{sudokuValues}</p>
      <p>Solved Board:</p>
      <p>{solved}</p>

      {renderSudokuBoard()}
      
    </div>
  );
}
