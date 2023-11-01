/* eslint-disable react/prop-types */
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Button from "./Button";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = ({ closeModal }) => {
  const form = useRef();
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Show loading toast
      const loadingToastId = toast.info("Submitting email...", {
        autoClose: false,
      });

      const result = await emailjs.sendForm(
        import.meta.env.VITE_APP_SERVICE_ID,
        import.meta.env.VITE_APP_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_APP_PUBLIC_ID
      );

      // Remove the loading toast
      toast.dismiss(loadingToastId);

      if (result) {
        toast.success("Email submitted successfully!");
        closeModal(); // Close the modal after successful submission
      } else {
        toast.error("Failed to submit form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred. Please try again later.");
    }
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
          rows="2"
          required
          placeholder="I want to try GenFa because..."
          style={{ maxHeight: "60px", overflowY: "auto" }}
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
