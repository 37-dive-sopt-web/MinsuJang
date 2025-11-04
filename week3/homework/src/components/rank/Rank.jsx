import Header from "../common/Header.jsx";
import { HEADER_TITLE } from "../../const/header.js";

const Rank = () => {
  return (
    <>
      <Header>
        <Header.Title title={HEADER_TITLE.RANK} size="h4" />
        <Header.RightButton label="기록 초기화" />
      </Header>
    </>
  );
};

export default Rank;
