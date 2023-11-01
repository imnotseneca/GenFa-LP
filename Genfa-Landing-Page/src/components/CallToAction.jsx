import styles from "../style";
import Button from "./Button";
import { useState } from "react";
import Modal from "./Modal";
import Contact from "./Contact";

const CallToAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section
      className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
    >
      <div className="flex-1 flex flex-col">
        <h5 className={styles.heading2}>Let&apos;s try our service now!</h5>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to forget about those old days of hassle with
          paper invoices!
        </p>
      </div>
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10 mb-3`}>
        <Button text={`Get a free trial now!`} onClick={openModal} />
      </div>
      {isModalOpen ? (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Intro Call</h2>
            <p className="text-gray-600 mb-4">
              {" "}
              Thanks for your interest in <strong>GenFa</strong>! 100+ customers
              trust our invoice processing capabilities.
            </p>
            <p className="text-gray-600 mb-4">
              {" "}
              Please share your company name and email with us and we will
              contact you for more information!
            </p>
            <Contact closeModal={closeModal} />
          </div>
        </Modal>
      ) : (
        ""
      )}
    </section>
  );
};

export default CallToAction;
