import Header from "../common/Header.jsx";
import { HEADER_TITLE } from "../../const/header.js";

const Game = () => {
  return (
    <>
      <Header>
        <Header.Title title={HEADER_TITLE.GAME} size="h4" />
        <Header.RightButton label="게임 리셋" />
      </Header>
    </>
  );
};

export default Game;
