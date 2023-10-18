import { analysis } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => {
  return (
    <section className={layout.section} id="">
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Lorem ipsum dolor <br /> sit amet consectetur adipisicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At illum,
          voluptates aperiam accusamus consequuntur cumque mollitia incidunt
          voluptatem repudiandae quis.
        </p>
        <Button styles="mt-10"></Button>
      </div>
      <div className={layout.sectionImg}>
        <img src={analysis} alt="card-image" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
