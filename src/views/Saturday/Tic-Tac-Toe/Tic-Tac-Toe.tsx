import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Button } from "antd";
import "antd/dist/reset.css";

import { useState } from "react";
// import "./../../../App.css";
import "./Tic-Tac-Toe.css";

function Square({
  value,
  onSquareClick,
}: {
  value: string;
  onSquareClick: () => void;
}) {
  // const [value, setCount] = useState<string>('');
  return (
    <>
      <button style={{ width: "50px", height: "50px" }} onClick={onSquareClick}>
        {value /* TODO */}
      </button>
    </>
  );
}

function TicTacToe() {
  // 按钮组件
  const [squares, setSquares] = useState<Array<string>>(Array(9).fill(null));
  // 定义状态切换
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) {
      // 如果当前位置已经有值，直接返回
      // 如果已经有人赢了，直接返回
      return;
    }
    // q: 下面的代码有什么用？
    // a: 用于复制数组，避免直接修改原数组
    // slice()是什么意思
    // a: slice()是数组的一个方法，用于复制数组
    const nextSquares = [...squares];
    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setXIsNext(!xIsNext);
    setSquares(nextSquares);

    // const nextSquares = squares;
    // squares[i] = 'X';
    // console.log(squares);
    // setSquares(squares);
    // q: 为什么这样写页面不会刷新？
    // a: 因为这样写没有修改state，只是修改了state的副本
  }

  function calculateWinner(squares: Array<string>) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "赢家: " + winner;
  } else {
    status = "下一步: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div>{status}</div>
      <div className="test">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <TicTacToe />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}