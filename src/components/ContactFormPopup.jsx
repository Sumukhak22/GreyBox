import { useState } from "react";
import { CSSTransition } from "react-transition-group";
import '../styles/ContactFormPopup.css'; // For transition animations

const ContactFormPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    onClose(); // Close the popup after submission
  };

  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="popup"
      unmountOnExit
    >
      <div className="fixed inset-0 bg-gradient-to-b from-[#1a0c3e] to-black bg-opacity-75 flex justify-center items-center z-50">
        <div className="bg-gradient-to-b from-[#1a0c3e] to-[#14132b] p-8 rounded-lg shadow-2xl max-w-md w-full transform scale-95 transition-all duration-300">
          <h2 className="text-2xl font-bold mb-6 text-white">Contact Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 bg-transparent text-white border border-gray-600 rounded-lg shadow-sm focus:ring-indigo-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 bg-transparent text-white border border-gray-600 rounded-lg shadow-sm focus:ring-indigo-500"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full px-4 py-2 bg-transparent text-white border border-gray-600 rounded-lg shadow-sm focus:ring-indigo-500"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="mr-4 bg-transparent border border-gray-500 text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300"
                onClick={onClose}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ContactFormPopup;
