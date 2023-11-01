import styles from "../style";
import { discount, invoiceForm } from "../assets";
import Button from "./Button";
import { useState } from "react";
import Modal from "./Modal";
import Contact from "./Contact";
import { motion } from "framer-motion";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="absolute z-[0] w-[50%] h-[50%] right-0 top-20 blue__gradient"></div>

      <section
        id="home"
        className={`flex md:flex-row flex-col ${styles.paddingY}`}
      >
        <div
          className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
        >
          <motion.div
            className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
            initial={{ opacity: 0.5, scale: 0.3 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 1,
            }}
          >
            <img
              src={discount}
              alt="discount logo"
              className="w-[32px] h-[32px]"
            />
            <p className={`${styles.paragraph} ml-2 `}>
              <span className="text-white">20%</span> Discount for{" "}
              <span>1 Month</span> Account
            </p>
          </motion.div>
          <div className="flex flex-row justify-between items-center w-full">
            <motion.h1
              className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                ease: "linear",
                duration: 1,
              }}
            >
              Your Next <br className="sm:block hidden" />{" "}
              <span className="text-gradient">Invoice</span> Generator.
            </motion.h1>
          </div>
          <motion.p
            className={`${styles.paragraph} max-w-[470px] mt-5`}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "linear",
              duration: 1.25,
            }}
          >
            Seamlessly generate, record, and download professional invoices with
            ease. Say goodbye to cumbersome paperwork and embrace a streamlined
            invoicing solution tailored for your business needs.
          </motion.p>
          <motion.div
            className="ss:flex md:mr-4 mr-0 w-full sm:w-8/12"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              ease: "easeIn",
              duration: 1.50,
            }}
          >
            <Button
              styles="mt-10 w-full sm:w-8/12"
              text="Book a free discovery test"
              onClick={openModal}
            />
          </motion.div>
        </div>
        <div
          className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        >
          <div className="absolute z-[0] w-[40%] h-[35%] -left-40 pink__gradient"></div>
          <div className="absolute z-[2] w-[80%] h-[85%] rounded-full bottom-40  white__gradient"></div>
          <motion.img
            src={invoiceForm}
            alt="billing"
            className="md:block hidden max-w-sm h-[100%] z-index[10] p-6"
            animate={{ rotate: 360 }}
            transition={{
              type: "spring",
              damping: 10,
              stiffness: 50,
              restDelta: 0.001,
            }}
          />
        </div>
        {isModalOpen ? (
          <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className="p-4">
              <h2 className="text-2xl font-bold mb-4">Intro Call</h2>
              <p className="text-gray-600 mb-4">
                {" "}
                Thanks for your interest in <strong>GenFa</strong>! 100+
                customers trust our invoice processing capabilities.
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
    </>
  );
};

export default Hero;
