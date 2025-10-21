import React, { useState } from "react";
import { FaInstagram, FaFacebook, } from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_fp0o0t8",
        "template_tw7gb1b",
        formData,
        "xLCVjFNHMYIDmRp3t"
      )
      .then(
        (result) => {
          alert("📧 Gửi thành công! Tôi sẽ phản hồi sớm nhất có thể.");
          console.log(result.text);
          console.log(formData)
        },
        (error) => {
          alert("❌ Gửi thất bại, vui lòng thử lại!");
          console.error(error.text);
        }
      );
  };

  return (
    <div className="flex flex-col md:flex-row justify-between max-w-5xl mx-auto px-6 py-10 gap-10">
      {/* Left Info Section */}
      <div className="md:w-1/2 flex flex-col space-y-4">
        <h1 className="text-5xl font-bold mb-4 text-gray-800">CONTACT</h1>
        <h2 className="text-2xl font-semibold text-green-700">DAT TRAN</h2>
        <p className="text-green-700">
          📧 <span className="ml-2">trandat2280600642@gmail.com</span>
        </p>
        <p className="text-green-700">
          📞 <span className="ml-2">+84 343 439 171</span>
        </p>

        <div className="flex space-x-4 mt-4 text-2xl">
          <a
            href="https://www.instagram.com/skz0412/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/asean.abeno"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FaFacebook />
          </a>
        </div>
      </div>

      {/* Right Form Section */}
      <form
        onSubmit={handleSubmit}
        className="md:w-1/2 flex flex-col space-y-4 bg-white p-6 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Name *"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none h-40"
        />
        <button
          type="submit"
          className="py-3 px-6 bg-green-700 text-white font-semibold rounded-md hover:bg-green-800 transition-colors"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
