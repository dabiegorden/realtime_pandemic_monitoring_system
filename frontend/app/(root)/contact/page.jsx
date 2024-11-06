"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handler for form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Form validation
  const validateForm = () => {
    const errors = {};
    if (!formData.name) errors.name = "Name is required!";
    if (!formData.email) errors.email = "Email is required!";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      errors.email = "Email is invalid";
    if (!formData.subject) errors.subject = "Subject is required!";
    if (!formData.message) errors.message = "Message is required!";
    return errors;
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      try {
        const response = await fetch("http://localhost:5000/api/contacts", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setSubmitted(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
          console.log("Form submitted successfully");
        } else {
          console.error("Error submitting form");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      <section className="contact">
        <div className="flex flex-col justify-center items-center gap-8 pt-[10rem] sm:pt-[15rem] px-4">
          <h1 className="text-3xl text-[#eee] shadow-md">Get in Touch</h1>
          <p className="text-xl text-[#eee] tracking-wider text-center">
            Have questions or suggestions? We're here to help
          </p>
          <a
            href="#send_message"
            className="bg-orange-500 px-4 py-3 rounded-md text-[#eee] shadow-sm hover:bg-transparent hover:ring-[1.5px] hover:ring-orange-500 hover:duration-300 hover:shadow-md"
          >
            Reach Out
          </a>
        </div>
      </section>

      <div className="my-24 flex justify-center items-center flex-col gap-8 px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <div className="contact-form-container w-full bg-white px-4 py-4 rounded-md">
            {submitted ? (
              <div className="flex flex-col gap-4 text-center">
                <p>Thank you for reaching out! We will get back to you soon.</p>
                <Link
                  href="/"
                  className="bg-orange-500 px-4 py-3 rounded-md text-[#eee] shadow-sm hover:bg-transparent hover:text-black mt-4 hover:ring-[1.5px] hover:ring-orange-500 hover:duration-300 hover:shadow-md"
                >
                  Get back home
                </Link>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="contact-form"
                id="send_message"
              >
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`input ${
                      errors.name ? "border-red-500" : ""
                    } w-[40vw] 400:w-[75vw]`}
                    placeholder="Name..."
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                  {errors.name && (
                    <p
                      className="error-text text-red-500"
                      aria-live="assertive"
                    >
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input ${
                      errors.email ? "border-red-500" : ""
                    } w-[40vw] 400:w-[75vw]`}
                    placeholder="Email..."
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email && (
                    <p
                      className="error-text text-red-500"
                      aria-live="assertive"
                    >
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`input ${
                      errors.subject ? "border-red-500" : ""
                    } w-[40vw] 400:w-[75vw]`}
                    placeholder="Subject..."
                    aria-invalid={errors.subject ? "true" : "false"}
                  />
                  {errors.subject && (
                    <p
                      className="error-text text-red-500"
                      aria-live="assertive"
                    >
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`input ${
                      errors.message ? "border-red-500" : ""
                    } w-[40vw] 400:w-[75vw]`}
                    placeholder="Write your message..."
                    aria-invalid={errors.message ? "true" : "false"}
                  ></textarea>
                  {errors.message && (
                    <p
                      className="error-text text-red-500"
                      aria-live="assertive"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="bg-orange-500 px-4 py-3 rounded-md text-[#eee] shadow-sm hover:bg-transparent hover:text-black mt-4 hover:ring-[1.5px] hover:ring-orange-500 hover:duration-300 hover:shadow-md"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
