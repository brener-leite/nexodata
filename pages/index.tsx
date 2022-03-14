import type { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";

import Main from "components/Main";
import Scoreboard from "components/Scoreboard";
import Playfield from "components/Playfield";
import { PlayType } from "components/Play/interface";
import Play from "components/Play";
import { api } from "../services/api";

type Turns = "player" | "machine" | "end";
type Winner = "player" | "machine" | "draw" | undefined;

const Home: NextPage = () => {
  const [score, setScore] = useState(0);
  const [turn, setTurn] = useState<Turns>("player");
  const [play, setPlay] = useState<PlayType>();
  const [winner, setWinner] = useState<Winner>();

  useEffect(() => {
    if (turn === "machine") {
    }
  }, [turn]);

  useEffect(() => {
    if (turn === "player" && play) {
      setTurn("machine");
    }
  }, [play]);

  return (
    <>
      <Head>
        <title>Nexodata</title>
        <meta name="description" content="Just a test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main>
        <Scoreboard score={score}></Scoreboard>
        {turn === "player" && <Playfield setPlay={setPlay} />}
        {turn === "machine" && (
          <>
            <Play isClickable={false} play={play} />
            <Play isClickable={false} />
          </>
        )}
        {/* {turn === "end" && <></>} */}
      </Main>
    </>
  );
};

export default Home;
