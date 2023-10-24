import styles from "../style";
import Button from "./Button";

const CallToAction = () => {
  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h5 className={styles.heading2}>Let&apos;s try our service now!</h5>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to forget about those old days of hassle with paper invoices!
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button text={`Get a free trial now!`}/>
      </div>
    </section>
  );
};

export default CallToAction;
