"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  FaEnvelope,
  FaUser,
  FaCommentDots,
  FaSpinner,
  FaCheckCircle,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useReducer, useRef, useCallback } from "react";

const formReducer = (state, action) => {
  switch (action.type) {
    case "SET_SUCCESS":
      return { ...state, successMessage: action.message };
    case "RESET":
      return { successMessage: "" };
    default:
      return state;
  }
};

export default function ContactForm() {
  const [formState, dispatch] = useReducer(formReducer, {
    successMessage: "",
  });

  const ContactSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Name is too short!")
      .max(50, "Name is too long!")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    message: Yup.string()
      .min(10, "Message is too short!")
      .required("Message is required"),
  });

  const nameInputRef = useRef(null);

  const handleSubmit = useCallback((values, { resetForm }) => {
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(serviceID, templateID, values, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        dispatch({
          type: "SET_SUCCESS",
          message: "Your message has been sent successfully!",
        });
        resetForm();
        nameInputRef.current?.focus();
      })
      .catch((error) => {
        console.error("FAILED...", error);
        dispatch({
          type: "SET_SUCCESS",
          message: "Oops! Something went wrong. Please try again.",
        });
      })
      .finally(() => {
        setTimeout(() => dispatch({ type: "RESET" }), 5000);
      });
  }, []);

  return (
    <section className="py-16 bg-white" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8">
          Contact Us
        </h2>

        {formState.successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6 flex items-center justify-center">
            <FaCheckCircle className="text-green-500 mr-2" />
            {formState.successMessage}
          </div>
        )}

        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          validationSchema={ContactSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="bg-gray-100 p-8 rounded-lg shadow-md space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-bold mb-2"
                >
                  <FaUser className="inline-block text-blue-500 mr-2" />
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  innerRef={nameInputRef}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-bold mb-2"
                >
                  <FaEnvelope className="inline-block text-blue-500 mr-2" />
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-bold mb-2"
                >
                  <FaCommentDots className="inline-block text-blue-500 mr-2" />
                  Message
                </label>
                <Field
                  as="textarea"
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  className="w-full text-black px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
