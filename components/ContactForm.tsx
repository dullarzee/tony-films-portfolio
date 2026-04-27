"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "wedding",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Please enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setIsLoading(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "wedding",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitted(false), 5000);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 bg-dark dark:bg-dark light:bg-light-bg transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Section Title */}
        <div className="mb-16 text-center">
          <h2 className="section-title mb-4 text-slate-200">
            Let&apos;s Create Something Amazing
          </h2>
          <p className="text-lg text-gray-400 dark:text-gray-400 light:text-gray-600 max-w-2xl mx-auto">
            Ready to bring your vision to life? Get in touch and let&apos;s
            discuss your project.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-dark-card dark:bg-dark-card light:bg-white rounded-lg border border-dark-card dark:border-dark-card light:border-gray-200 p-8 md:p-12">
          {submitted ? (
            <div className="text-center py-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gold/10 dark:bg-gold/10 light:bg-navy/10 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-gold dark:text-gold light:text-navy" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-white dark:text-white light:text-gray-900 mb-2">
                Thank you!
              </h3>
              <p className="text-gray-400 dark:text-gray-400 light:text-gray-600">
                Your inquiry has been received. I&apos;ll get back to you within
                24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-white dark:text-white light:text-gray-900 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-dark dark:bg-dark light:bg-light-bg border transition-colors focus:outline-none focus:border-gold dark:focus:border-gold light:focus:border-navy ${
                    errors.name
                      ? "border-red-500"
                      : "border-dark-card dark:border-dark-card light:border-gray-300 hover:border-gray-500 dark:hover:border-gray-500"
                  } text-white dark:text-white light:text-gray-900`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-white dark:text-white light:text-gray-900 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-dark dark:bg-dark light:bg-light-bg border transition-colors focus:outline-none focus:border-gold dark:focus:border-gold light:focus:border-navy ${
                    errors.email
                      ? "border-red-500"
                      : "border-dark-card dark:border-dark-card light:border-gray-300 hover:border-gray-500 dark:hover:border-gray-500"
                  } text-white dark:text-white light:text-gray-900`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-white dark:text-white light:text-gray-900 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg bg-dark dark:bg-dark light:bg-light-bg border transition-colors focus:outline-none focus:border-gold dark:focus:border-gold light:focus:border-navy ${
                    errors.phone
                      ? "border-red-500"
                      : "border-dark-card dark:border-dark-card light:border-gray-300 hover:border-gray-500 dark:hover:border-gray-500"
                  } text-white dark:text-white light:text-gray-900`}
                  placeholder="+1 (555) 000-0000"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Project Type */}
              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-white dark:text-white light:text-gray-900 mb-2"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg [&>option]:text-black bg-dark dark:bg-dark light:bg-light-bg border border-dark-card dark:border-dark-card light:border-gray-300 hover:border-gray-500 dark:hover:border-gray-500 focus:outline-none focus:border-gold dark:focus:border-gold light:focus:border-navy  dark:text-white light:text-gray-900 transition-colors"
                >
                  <option value="documentaries">Documentary</option>
                  <option value="commercials">Commercial/Promotional</option>
                  <option value="corporate videos">Corporate Video</option>
                  <option value="brand content">Brand Content</option>
                  <option value="live production">Live Production</option>
                  <option value="video podcast">Video Podcast</option>
                  <option value="other">other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-white dark:text-white light:text-gray-900 mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg bg-dark dark:bg-dark light:bg-light-bg border transition-colors focus:outline-none focus:border-gold dark:focus:border-gold light:focus:border-navy resize-none ${
                    errors.message
                      ? "border-red-500"
                      : "border-dark-card dark:border-dark-card light:border-gray-300 hover:border-gray-500 dark:hover:border-gray-500"
                  } text-white dark:text-white light:text-gray-900`}
                  placeholder="Tell me about your project, vision, and timeline..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-6 bg-gold dark:bg-gold light:bg-navy text-dark dark:text-dark light:text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-gold/30 dark:hover:shadow-gold/30 light:hover:shadow-navy/30 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-dark dark:border-dark light:border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Contact Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="text-lg font-semibold text-white dark:text-white light:text-gray-900 mb-2">
              Email
            </h4>
            <a
              href="mailto:filmbytonymediaproduction@gmail.com"
              className="text-gold dark:text-gold light:text-navy hover:underline"
            >
              filmbytonymediaproduction@gmail.com
            </a>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white dark:text-white light:text-gray-900 mb-2">
              Phone
            </h4>
            <a
              href="tel:+1234567890"
              className="text-gold dark:text-gold light:text-navy hover:underline"
            >
              +234 70 7079 2343
            </a>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white dark:text-white light:text-gray-900 mb-2">
              Follow
            </h4>
            <div className="flex justify-center gap-4">
              {["Instagram", "YouTube", "Vimeo"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gold dark:text-gold light:text-navy hover:underline text-sm"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
