import type { ReactNode } from "react";
import Style from "./List.module.css";

interface ListProps {
  contents: ReactNode;
}

const List = ({ contents }: ListProps) => {
  return (
    <section className={Style.list}>
      {contents}
    </section>
  );
};

export default List;
