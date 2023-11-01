import styles from "../style";
import { discount, invoiceForm } from "../assets";
import Button from "./Button";
import { useState, useRef } from "react";
import Modal from "./Modal";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const form = useRef();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_APP_PUBLIC_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    closeModal(); // Close the modal after submission (you can modify this as needed)
  };

  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img
            src={discount}
            alt="discount logo"
            className="w-[32px] h-[32px]"
          />
          <p className={`${styles.paragraph} ml-2 `}>
            <span className="text-white">20%</span> Discount for{" "}
            <span>1 Month</span> Account
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Your Next <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Invoice</span> Generator.
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Seamlessly generate, record, and download professional invoices with
          ease. Say goodbye to cumbersome paperwork and embrace a streamlined
          invoicing solution tailored for your business needs.
        </p>
        <div className="ss:flex md:mr-4 mr-0 w-full sm:w-8/12">
          <Button
            styles="mt-10 w-full sm:w-8/12"
            text="Book a free discovery test"
            onClick={openModal}
          />
        </div>
      </div>
      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src={invoiceForm}
          alt="billing"
          className="md:block hidden max-w-sm h-[100%] z-index[10] p-6"
        />
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient"></div>
        <div className="absolute z-[2] w-[80%] h-[85%] rounded-full bottom-40  white__gradient"></div>
        <div className="absolute z-[0] w-[50%] h-[50%] -right-40 top-20 blue__gradient"></div>
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
            <form ref={form} onSubmit={handleFormSubmit}>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="input1"
                  aria-required
                >
                  Company name: <span className="text-red-700">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="input1"
                  type="text"
                  name="user_name"
                  placeholder="Your company name"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="input2"
                >
                  Email: <span className="text-red-700">*</span>
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="input2"
                  type="email"
                  name="user_email"
                  placeholder="Your email"
                  required
                />
                <label
                  className="block text-gray-700 text-sm font-bold mt-4 mb-2"
                  htmlFor="input2"
                >
                  Message:
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="message"
                  id="input3"
                  cols="35"
                  rows="3"
                  required
                  placeholder="I want to try GenFa because..."
                ></textarea>
              </div>

              <Button
                text={"Submit"}
                type="submit"
                width={"full"}
                icon={<FaPaperPlane />}
              />
            </form>
          </div>
        </Modal>
      ) : (
        ""
      )}
    </section>
  );
};

export default Hero;
