import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // to show success/error message
  // console.log(import.meta.env.VITE_N8N_URL)

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    // Collect form data
    const formData = new FormData(form.current);
    const payload = {
      from_name: formData.get("from_name"),
      user_email: formData.get("user_email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch(
        import.meta.env.VITE_N8N_URL,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (res.ok) {
        setStatus("Message sent successfully!");
        form.current.reset(); // clear form
        toast.success('Anand Jha will contact you ASAP !!')
      } else {
        setStatus("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 18 }}
      exit={{ opacity: 0, y: -40 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4"
    >
      <div className="backdrop-blur-md bg-white/70 shadow-xl rounded-2xl w-full max-w-lg p-4 md:p-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-2">
          Get in Touch
        </h2>
        <p className="text-center text-green-400 mb-3 text-xs">Powered by n8n + spreadsheet + gmail response + tg</p>
        <p className="text-center text-gray-600 mb-6 text-sm mt-4">
          Have a project or a question? Drop a message and I'll get back to you!
        </p>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-5">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
            className="p-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="p-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="p-3 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none"
          />
          <motion.button
            type="submit"
            className={`w-full py-3 bg-blue-600 text-white rounded-lg font-semibold shadow-md transition duration-300 hover:bg-blue-700 ${
              loading && "opacity-70 cursor-not-allowed"
            }`}
            whileHover={{ scale: loading ? 1 : 1.03 }}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
        {status && (
          <p className="text-center mt-4 text-sm text-gray-700">{status}</p>
        )}
      </div>
    </motion.div>
  );
};

export default ContactForm;
