import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

import { PlayType, TurnType, WinnerType } from "../types/types";
import Play from "components/Play";
import Button from "components/Button";
import Main from "components/Main";
import Scoreboard from "components/Scoreboard";
import Playfield from "components/Playfield";
import Text from "components/Text";
import Result from "components/Result";

const Home: NextPage = () => {
  const dataScoreName = "jokenpoScore";
  const [score, setScore] = useState(0);
  const [turn, setTurn] = useState<TurnType>("player");
  const [play, setPlay] = useState<PlayType>();
  const [machinePlay, setMachinePlay] = useState<PlayType>();
  const [winner, setWinner] = useState<WinnerType>();
  const [text, setText] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleMachinePlay = () => {
    setText("Machine is choosing...");
    const plays = {
      1: "paper",
      2: "rock",
      3: "scissors",
    };
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * (4 - 1)) + 1;

      setMachinePlay(plays[randomNumber]);
      setText(`Machine selected ${plays[randomNumber]}`);
      handleResult(play, plays[randomNumber]);
    }, 2000);
  };

  const handleResult = (playerPlay, machinePlay) => {
    const victory = {
      paper: "rock",
      rock: "scissors",
      scissors: "paper",
    };

    if (victory[playerPlay] === machinePlay) {
      setWinner("player");
    } else if (victory[machinePlay] === playerPlay) {
      setWinner("machine");
    } else {
      setWinner("draw");
    }

    setTurn("end");
  };

  useEffect(() => {
    const dataScore = localStorage.getItem("jokenpoScore");
    if (dataScore) {
      setScore(parseInt(dataScore));
      return;
    }
    localStorage.setItem(dataScoreName, String(score));
  }, []);

  useEffect(() => {
    switch (turn) {
      case "player":
        break;

      case "machine":
        handleMachinePlay();
        break;

      case "end":
        break;
    }
  }, [turn]);

  useEffect(() => {
    if (turn === "player" && play) {
      setTurn("machine");
    }
  }, [play]);

  useEffect(() => {
    const result = {
      player: "You win",
      machine: "You loose",
      draw: "Draw",
    };

    setResult(result[winner]);
    if (winner === "player") {
      setScore(score + 1);
    }
  }, [winner]);

  useEffect(() => {
    localStorage.setItem(dataScoreName, String(score));
  }, [score]);

  return (
    <>
      <Head>
        <title>Nexodata</title>
        <meta name="description" content="Just a test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Scoreboard score={score} />
        {turn === "player" && <Playfield setPlay={setPlay} />}
        {(turn === "machine" || turn === "end") && (
          <Result player={play} machine={machinePlay} />
        )}
        <Text text={text} final={result} />
        {turn === "end" && (
          <Button
            onClick={() => {
              setTurn("player");
              setPlay(undefined);
              setMachinePlay(undefined);
              setText("");
              setResult("");
              setWinner(undefined);
            }}
          >
            Play again
          </Button>
        )}
      </Main>
    </>
  );
};

export default Home;
