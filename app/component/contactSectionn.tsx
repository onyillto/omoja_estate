"use client";
import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Tag,
  Send,
  Loader2,
} from "lucide-react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        toast.success("Message sent successfully!");
        setFormData({
          firstName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
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

  const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6"
    >
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.269.655 4.357 1.849 6.067l-1.254 4.587 4.68-1.233z" />
    </svg>
  );

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      info: "mojaealestate1@gmail.com",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      info: "+2349168366266",
    },
    {
      icon: <WhatsAppIcon />,
      title: "Whatsapp Number",
      info: "+2349168366266",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: <Facebook className="w-5 h-5" />,
    },
    { name: "Instagram", icon: <Instagram className="w-5 h-5" /> },
    { name: "LinkedIn", icon: <Linkedin className="w-5 h-5" /> },
    { name: "Twitter", icon: <Twitter className="w-5 h-5" /> },
  ];

  return (
    <section className="relative w-full bg-[#800517] py-20 md:py-16">
      <Toaster position="top-right" />
      <div className="max-w-[1400px] mx-auto px-10 md:px-10 sm:px-5">
        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={handleSendEmailClick}
            className="flex-1 bg-white text-[#800517] hover:bg-gray-100 px-8 py-4 rounded-lg text-[16px] font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl max-w-[200px]"
          >
            <Mail className="w-5 h-5" />
            Send Email
          </button>

          <Link
            href="/company/projects"
            className="flex-1 bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-[16px] font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl max-w-[200px]"
          >
            <Tag className="w-5 h-5" />
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
                      disabled={isSubmitting}
                      className="w-full bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg text-[16px] font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-xl transition-all disabled:bg-red-400 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" /> Submit
                        </>
                      )}
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
