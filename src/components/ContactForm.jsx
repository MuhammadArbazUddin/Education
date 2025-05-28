import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "emailjs-com";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const timelineItems = [
    {
      title: "Understanding Your Vision",
      description:
        "Our team collaborates with you to understand your personal brand, goals, and audience.",
    },
    {
      title: "Initial Strategy Consultation",
      description:
        "We schedule a call to discuss your brand identity and marketing objectives in detail.",
    },
    {
      title: "Customized Marketing Plan",
      description:
        "Based on our consultation, we create a tailored marketing and branding plan designed to grow your influence.",
    },
    {
      title: "Execution and Growth",
      description:
        "With your approval, our team executes the plan, managing campaigns and providing insights to ensure continuous growth.",
    },
  ];

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
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
        "service_fze3fg5", // Replace with your service ID
        "template_wsw0djh", // Replace with your template ID
        formData,
        "solLaLeHMEEOFy-Pn" // Replace with your public key
      )
      .then(
        (result) => {
          console.log("Email successfully sent:", result.text);
          toast.success("Message sent successfully!");
          setFormData({ firstName: "", lastName: "", email: "", message: "" });
        },
        (error) => {
          console.error("Error sending email:", error.text);
          toast.error("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <section
      className="px-4 py-6 my-4 md:px-16 md:py-12 md:my-8"
      id="contact-us"
    >
      <Toaster />

      <div className="text-center py-6 mb-6">
        <h1 className="text-4xl font-bold">
          Get a Tailored Plan for Your Brand's Growth
        </h1>
        <p className="text-lg font-sans">
          Risk-free, Trusted Marketing and Branding Services for Influencers and
          Creators
        </p>
      </div>
      <div className="flex flex-col gap-16 md:flex-row">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-2xl font-bold mb-6">
            What Happens When You Collaborate With Us?
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
        <div className="md:w-1/2 text-black p-6 flex flex-col rounded-lg">
          <div className="text-3xl flex justify-center items-center my-4 rounded-full bg-black p-2 w-[70px] h-[70px] mx-auto">
            <FaPaperPlane className="text-white" />
          </div>
          <h3 className="text-2xl text-white font-bold mb-6 text-center">
            Send us a message
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
            <textarea
              value={formData.message}
              onChange={handleChange}
              name="message"
              placeholder="Briefly describe your project requirements or objective of the discussion"
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
