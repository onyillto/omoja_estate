"use client";
import React, { useState } from "react";
import Link from "next/link";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [showContactInfo, setShowContactInfo] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const [notification, setNotification] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setNotification({
          show: true,
          message: "Message sent successfully!",
          type: "success",
        });

        setFormData({
          firstName: "",
          email: "",
          phone: "",
          message: "",
        });

        setTimeout(() => {
          setNotification({ ...notification, show: false });
        }, 3000);
      } else {
        setNotification({
          show: true,
          message: "Failed to send message.",
          type: "error",
        });

        setTimeout(() => {
          setNotification({ ...notification, show: false });
        }, 3000);
      }
    } catch (error) {
      setNotification({
        show: true,
        message: "An error occurred.",
        type: "error",
      });

      setTimeout(() => {
        setNotification({ ...notification, show: false });
      }, 3000);
    }
  };

  const handleSendEmailClick = () => {
    if (!showContactInfo) {
      setShowContactInfo(true);
      setShowForm(true);
    } else {
      setShowContactInfo(false);
      setShowForm(false);
    }
  };

  const contactInfo = [
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email",
      info: "mojaealestate1@gmail.com",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Phone",
      info: "+2349168366266",
    },
    {
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Whatsapp Number",
      info: "+2349168366266",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12..." />
        </svg>
      ),
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C8.74 0..." />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452..." />
        </svg>
      ),
    },
    {
      name: "Twitter",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57..." />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-[#800517] py-20 md:py-16">
      {/* Notification Popup */}
      {notification.show && (
        <div
          className={`fixed top-5 right-5 px-6 py-3 rounded-lg shadow-xl text-white 
          ${notification.type === "success" ? "bg-green-600" : "bg-red-600"}`}
        >
          {notification.message}
        </div>
      )}

      <div className="max-w-[1400px] mx-auto px-10 md:px-10 sm:px-5">
        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={handleSendEmailClick}
            className="flex-1 bg-white text-[#800517] hover:bg-gray-100 px-8 py-4 rounded-lg text-[16px] font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl max-w-[200px]"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            Send Email
          </button>

          <Link
            href="/company/projects"
            className="flex-1 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-[16px] font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl max-w-[200px]"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            See Offers
          </Link>
        </div>

        {showContactInfo && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-12">
            {/* Left Side */}
            <div>
              <div className="mb-12">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-0.5 bg-red-400"></div>
                  <span className="text-red-400 text-[14px] uppercase tracking-[3px] font-semibold">
                    Get in Touch
                  </span>
                </div>
                <h2 className="text-white text-[36px] md:text-[32px] font-bold mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-100 text-[16px] leading-7">
                  We&apos;re here to answer your questions and help you find the
                  perfect property.
                </p>
              </div>

              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-5 bg-white/5 border border-white/10 rounded-xl p-6 hover:border-red-400 transition-colors"
                  >
                    <div className="w-14 h-14 bg-red-400/10 rounded-lg flex items-center justify-center text-red-400 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-white font-medium text-[16px] mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-100 text-[15px]">{item.info}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <h3 className="text-white font-semibold text-[18px] mb-4">
                  Follow Us
                </h3>
                <div className="flex items-center gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href="#"
                      className="w-12 h-12 bg-white/5 border border-white/10 hover:border-red-400 rounded-lg flex items-center justify-center text-gray-100 hover:text-red-400 transition-all"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div>
              <div
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  showForm ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="bg-white/5 border border-white/10 rounded-xl p-8 md:p-6">
                  <h2 className="text-white text-[28px] md:text-[24px] font-bold mb-2">
                    Send us a Message
                  </h2>
                  <p className="text-gray-100 text-[15px] mb-8">
                    Fill out the form below and we&apos;ll get back to you.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-gray-300 font-medium text-[14px] mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-red-400 outline-none text-white text-[15px]"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 font-medium text-[14px] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-red-400 outline-none text-white text-[15px]"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 font-medium text-[14px] mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-red-400 outline-none text-white text-[15px]"
                      />
                    </div>

                    <div>
                      <label className="block text-gray-300 font-medium text-[14px] mb-2">
                        Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-black/20 border border-white/10 focus:border-red-400 outline-none text-white text-[15px] resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-[16px] font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </svg>
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
