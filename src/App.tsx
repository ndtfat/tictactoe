import { useEffect, useState } from "react";
import Table from "./components/Table";
import { Grid, HistoryItem, Player, Screen } from "./type";
import { checkDraw, checkWinner } from "./helper";
import Button from "./components/Button";
import Winner from "./components/Winner";
import History from "./components/History";

const emptyGrid: Grid = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function App() {
  const [winner, setWinner] = useState<Player | "Draw">();
  const [grid, setGrid] = useState<Grid>(JSON.parse(JSON.stringify(emptyGrid)));
  const [turn, setTurn] = useState<Player>("X");
  const [screen, setScreen] = useState<Screen>("table");
  const [history, setHistory] = useState<HistoryItem[]>([
    { winner: "X", time: new Date() },
  ]);

  useEffect(() => {
    if (winner) {
      setHistory((prev) => [{ winner, time: new Date() }, ...(prev || [])]);
      setScreen("winner");
    }
  }, [winner]);

  const handleReset = () => {
    setGrid(JSON.parse(JSON.stringify(emptyGrid)));
    setTurn("X");

    if (winner) {
      setWinner(undefined);
      setScreen("table");
    }
  };

  const handleMark = (row: number, col: number) => {
    const curr = [...grid];
    curr[row][col] = turn;
    setGrid(curr);
    changeTurn();

    if (checkDraw(grid)) {
      setWinner("Draw");
    } else {
      const winner = checkWinner(grid);
      if (winner) setWinner(winner);
    }
  };

  const changeTurn = () => {
    setTurn((prev) => (prev == "X" ? "O" : "X"));
  };

  return (
    <div className="h-screen flex flex-col gap-[50px] justify-center items-center">
      <h1 className="text-5xl">Tic Tac Toe</h1>

      <div>
        <div className="flex justify-center mb-5 gap-2">
          {screen !== "history" && <Button onClick={handleReset}>Reset</Button>}
          <Button
            onClick={() => setScreen(screen == "history" ? "table" : "history")}
          >
            {screen == "history" ? "Back" : "History"}
          </Button>
        </div>

        <div className="size-[420px]">
          {screen == "table" && (
            <div className="fade-in">
              <Table grid={grid} onMark={handleMark} />
            </div>
          )}

          {screen == "winner" && winner && <Winner winner={winner} />}

          {screen == "history" && <History history={history} />}
        </div>
      </div>
    </div>
  );
}

export default App;
