// Modal.js
import { AiOutlineClose } from "react-icons/ai";
// eslint-disable-next-line react/prop-types
const Modal = ({ isOpen, onClose, children }) => {
  const modalClasses = isOpen
    ? "fixed inset-0 flex items-center justify-center"
    : "hidden";

  return (
    <div className={`${modalClasses} modal-overlay bg-gray-800 bg-opacity-50`}>
      <div className="modal bg-white w-96 p-4 rounded m-2">
        <div className="close-button-container">
            <AiOutlineClose className="close-button text-gray-600 opacity-90 hover:opacity-100" onClick={onClose} />
        </div>
      {children}
      </div>
    </div>
  );
};

export default Modal;
