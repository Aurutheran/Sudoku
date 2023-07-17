import React from "react";
import Board from "../../components/board";
export default function SudokuComponent({ solvedBoard, board }) {
  return (
    <>
      <Board board={board} solved={solvedBoard} />
    </>
  );
}

function generateSudoku() {
  const board = [];

  // Helper function to check if a value is valid in a given position
  function isValid(board, row, col, num) {
    // Check if the number already exists in the row
    for (let i = 0; i < 9; i++) {
      if (board[row][i] === num) {
        return false;
      }
    }

    // Check if the number already exists in the column
    for (let i = 0; i < 9; i++) {
      if (board[i][col] === num) {
        return false;
      }
    }

    // Check if the number already exists in the 3x3 box
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[boxRow + i][boxCol + j] === num) {
          return false;
        }
      }
    }

    return true;
  }

  // Helper function to solve the Sudoku puzzle using backtracking
  function solve(board) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          // Generate a random order of numbers to try
          const numbers = Array.from({ length: 9 }, (_, i) => i + 1);
          for (let i = 0; i < 9; i++) {
            const randomIndex = Math.floor(Math.random() * numbers.length);
            const num = numbers[randomIndex];
            numbers.splice(randomIndex, 1);

            if (isValid(board, row, col, num)) {
              board[row][col] = num;

              if (solve(board)) {
                return true;
              }

              board[row][col] = 0;
            }
          }

          return false;
        }
      }
    }

    return true;
  }

  // Initialize an empty Sudoku board
  for (let i = 0; i < 9; i++) {
    board[i] = [];
    for (let j = 0; j < 9; j++) {
      board[i][j] = 0;
    }
  }

  // Solve the Sudoku puzzle starting from the top-left corner
  solve(board);

  // Copy the board to preserve the original solution
  const solvedBoard = JSON.parse(JSON.stringify(board));

  // Generate a playable Sudoku board by removing some squares
  const emptySquares = 45; // Adjust the number of empty squares as desired

  for (let i = 0; i < emptySquares; i++) {
    let row, col;
    do {
      row = Math.floor(Math.random() * 9);
      col = Math.floor(Math.random() * 9);
    } while (board[row][col] === 0);

    board[row][col] = 0;
  }

  return { solvedBoard, board };
}

export async function getServerSideProps() {
  

  // Generate a Sudoku board
  const { solvedBoard, board } = generateSudoku();

  return{
    props:{
      solvedBoard: solvedBoard,
      board: board,
    },
  };
}
