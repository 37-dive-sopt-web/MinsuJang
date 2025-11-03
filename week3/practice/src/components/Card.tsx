import Style from "./Card.module.css";

interface CardProps {
  name: string;
  github: string;
  englishName: string;
}

const Card = ({ name, github, englishName }: CardProps) => {

  return (
    <article className={Style.card}>
      <h4>{name}</h4>
      <section className={Style.cardSection}>
        <p>{`깃허브: ${github}`}</p>
        <p>{`영문이름: ${englishName}`}</p>
      </section>
    </article>
  );
};

export default Card;
