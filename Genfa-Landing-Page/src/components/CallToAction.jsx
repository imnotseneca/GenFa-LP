import styles from "../style";
import Button from "./Button";
import { useState } from "react";
import Modal from "./Modal";
import { FaPaperPlane } from "react-icons/fa";

const CallToAction = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (formData) => {
    // Handle form submission logic here
    console.log("Form submitted with data:", formData);
    closeModal(); // Close the modal after submission (you can modify this as needed)
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
            <form
              onSubmit={(e) => {
                /* Handle form submission */
              }}
            >
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
                  placeholder="Your email"
                />
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

export default CallToAction;
