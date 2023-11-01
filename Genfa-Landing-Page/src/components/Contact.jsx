/* eslint-disable react/prop-types */
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";
import { FaPaperPlane } from "react-icons/fa";

const Contact = ({ closeModal }) => {
  const form = useRef();
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
  );
};

export default Contact;
