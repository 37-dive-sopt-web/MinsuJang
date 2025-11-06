import Header from "../common/Header.jsx";
import { HEADER_TITLE } from "../../const/header.js";
import { getRanking, resetRanking } from "../../features/rank/rankStore.js";
import Board from "./Board.jsx";
import Table from "../common/Table.jsx";
import { RANK_TABLE_HEAD } from "../../const/rank.js";
import { useHandleRankings } from "../../features/rank/useHandleRankings.js";

const Rank = () => {
  const data = getRanking();
  const { rankings, reset } = useHandleRankings(data);

  return (
    <>
      <Header>
        <Header.Title title={HEADER_TITLE.RANK} size="h4" />
        <Header.RightButton label="기록 초기화" onClick={reset} />
      </Header>
      <Board>
        <Table.Head>
          <Board.Row>
            {RANK_TABLE_HEAD.map((item) => (
              <Board.HeadCell key={item.label} width={item.size}>{item.label}</Board.HeadCell>
            ))}
          </Board.Row>
        </Table.Head>
        <Table.Body>
          {rankings.map((ranking, index) => (
            <Board.Row>
              <Board.Cell>{index + 1}</Board.Cell>
              <Board.Cell>Level {ranking.level}</Board.Cell>
              <Board.Cell>{ranking.time}</Board.Cell>
              <Board.Cell>{ranking.date}</Board.Cell>
            </Board.Row>
          ))}
        </Table.Body>
      </Board>
    </>
  );
};

export default Rank;
