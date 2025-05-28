import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const timelineItems = [
    {
      title: "Explore Courses",
      description:
        "We help you understand which program best fits your academic and career goals.",
    },
    {
      title: "Initial Consultation",
      description:
        "A counselor connects with you to review your educational background and interests.",
    },
    {
      title: "Course Planning",
      description:
        "We design a personalized learning path tailored to your selected course.",
    },
    {
      title: "Enrollment Support",
      description:
        "From application to onboarding, we assist you at every step of your educational journey.",
    },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    course: "",
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
        "service_fze3fg5",
        "template_wsw0djh",
        formData,
        "solLaLeHMEEOFy-Pn"
      )
      .then(
        (result) => {
          console.log("Email successfully sent:", result.text);
          toast.success("Inquiry submitted successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            course: "",
            message: "",
          });
        },
        (error) => {
          console.error("Error sending email:", error.text);
          toast.error("Failed to submit inquiry. Please try again.");
        }
      );
  };

  return (
    <section className="px-4 py-6 my-4 md:px-16 md:py-12 md:my-8" id="contact-us">
      <Toaster />

      <div className="text-center py-6 mb-6">
        <h1 className="text-4xl font-bold">Start Your Educational Journey</h1>
        <p className="text-lg font-sans">
          Personalized course guidance and admission support for students
        </p>
      </div>

      <div className="flex flex-col gap-16 md:flex-row">
        {/* Timeline */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-6">
            How We Guide You Through the Process
          </h2>
          <div className="relative space-y-12 pl-8">
            <div className="absolute top-2 left-4 w-[2px] h-full bg-white"></div>
            {timelineItems.map((item, index) => (
              <div key={index} className="relative flex items-start space-x-4">
                <div className="absolute top-[8px] left-[-21px] w-3 h-3 rounded-full border-4 bg-white"></div>
                <div>
                  <h2 className="text-xl font-bold">{item.title}</h2>
                  <p className="mt-1 font-sans">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2 text-black p-6 flex flex-col rounded-lg">
          <div className="text-3xl flex justify-center items-center my-4 rounded-full bg-black p-2 w-[70px] h-[70px] mx-auto">
            <FaPaperPlane className="text-white" />
          </div>
          <h3 className="text-2xl text-white font-bold mb-6 text-center">
            Send Us an Inquiry
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <input
                value={formData.firstName}
                onChange={handleChange}
                name="firstName"
                type="text"
                placeholder="First name*"
                className="w-1/2 p-2 border text-black rounded-md focus:outline-none"
              />
              <input
                value={formData.lastName}
                onChange={handleChange}
                name="lastName"
                type="text"
                placeholder="Last name"
                className="w-1/2 p-2 border text-black rounded-md focus:outline-none"
              />
            </div>

            <input
              value={formData.email}
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email*"
              className="w-full p-2 border text-black rounded-md focus:outline-none"
            />

            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full p-2 border text-black hover:text-black rounded-md focus:outline-none"
              required
            >
              <option value="" disabled>
                Select a Course*
              </option>
              <option value="web-development">Web Development</option>
              <option value="graphic-design">Graphic Design</option>
              <option value="digital-marketing">Digital Marketing</option>
              <option value="data-science">Data Science</option>
              <option value="business-management">Business Management</option>
            </select>

            <textarea
              value={formData.message}
              onChange={handleChange}
              name="message"
              placeholder="Tell us why you're interested in this course or ask any questions"
              className="w-full p-2 text-black border rounded-md h-32 focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="relative p-[2px] rounded-md"
              style={{
                background:
                  "linear-gradient(160deg, #C98D38, #994E1B 22%, #fff694 52%, #2E3832 83%)",
              }}
            >
              <span
                className="block bg-[#1B1B1A] px-4 py-2 rounded-md hover:bg-transparent transition-all duration-300"
                style={{ backgroundClip: "padding-box" }}
              >
                Submit
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
