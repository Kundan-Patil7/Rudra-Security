'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fname: '',
    fphone: '',
    femail: '',
    fcompany: '',
    fservice: '',
    flocation: '',
    fmessage: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.fname.trim()) newErrors.fname = 'Name is required';
    if (!formData.fphone.trim()) newErrors.fphone = 'Phone is required';
    if (!formData.fservice) newErrors.fservice = 'Please select a service';
    return newErrors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id]) setErrors((prev) => ({ ...prev, [id]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-12 md:p-16 text-center"
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">✅</span>
        </div>
        <h3 className="font-playfair text-2xl md:text-3xl font-bold text-ink mb-3">Message Received!</h3>
        <p className="text-sm text-ink3 max-w-sm mx-auto mb-4">
          Thank you for contacting Rudra Security. Our team will reach out to you within 2 hours with a detailed response.
        </p>
        <p className="text-xs text-ink3 mb-2">For urgent matters, call us directly:</p>
        <a href="tel:7020898975" className="font-bebas text-2xl md:text-3xl text-red tracking-wide">
          70208 98975
        </a>
      </motion.div>
    );
  }

  return (
    <div className="p-8 md:p-12 lg:p-16 bg-white border-l border-border">
      <h2 className="font-playfair text-2xl md:text-3xl font-bold text-ink mb-2">Send Us a Message</h2>
      <p className="text-sm text-ink3 mb-9">Fill out the form below and we'll get back to you within 2 hours.</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="fname" className="block text-[0.68rem] font-semibold tracking-[0.156rem] uppercase text-ink3 mb-2">
              Full Name <span className="text-red">*</span>
            </label>
            <input
              type="text"
              id="fname"
              value={formData.fname}
              onChange={handleChange}
              className={`w-full p-3.5 bg-off border-2 ${errors.fname ? 'border-red' : 'border-border'} text-ink font-dm text-sm outline-none transition-all focus:border-red focus:bg-white focus:shadow-[0_0_0_3px_rgba(200,16,46,0.08)]`}
              placeholder="Your name"
            />
            {errors.fname && <p className="text-xs text-red mt-1">{errors.fname}</p>}
          </div>
          <div>
            <label htmlFor="fphone" className="block text-[0.68rem] font-semibold tracking-[0.156rem] uppercase text-ink3 mb-2">
              Phone <span className="text-red">*</span>
            </label>
            <input
              type="tel"
              id="fphone"
              value={formData.fphone}
              onChange={handleChange}
              className={`w-full p-3.5 bg-off border-2 ${errors.fphone ? 'border-red' : 'border-border'} text-ink font-dm text-sm outline-none transition-all focus:border-red focus:bg-white`}
              placeholder="+91 XXXXX XXXXX"
            />
            {errors.fphone && <p className="text-xs text-red mt-1">{errors.fphone}</p>}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label htmlFor="femail" className="block text-[0.68rem] font-semibold tracking-[0.156rem] uppercase text-ink3 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="femail"
              value={formData.femail}
              onChange={handleChange}
              className="w-full p-3.5 bg-off border-2 border-border text-ink font-dm text-sm outline-none transition-all focus:border-red focus:bg-white"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label htmlFor="fcompany" className="block text-[0.68rem] font-semibold tracking-[0.156rem] uppercase text-ink3 mb-2">
              Company / Society
            </label>
            <input
              type="text"
              id="fcompany"
              value={formData.fcompany}
              onChange={handleChange}
              className="w-full p-3.5 bg-off border-2 border-border text-ink font-dm text-sm outline-none transition-all focus:border-red focus:bg-white"
              placeholder="Organisation name"
            />
          </div>
        </div>

        <div>
          <label htmlFor="fservice" className="block text-[0.68rem] font-semibold tracking-[0.156rem] uppercase text-ink3 mb-2">
            Service Required <span className="text-red">*</span>
          </label>
          <div className="relative">
            <select
              id="fservice"
              value={formData.fservice}
              onChange={handleChange}
              className={`w-full p-3.5 bg-off border-2 ${errors.fservice ? 'border-red' : 'border-border'} text-ink font-dm text-sm outline-none appearance-none cursor-pointer focus:border-red focus:bg-white`}
            >
              <option value="" disabled>Select a service</option>
              <option>Industrial Security</option>
              <option>Housing Society Security</option>
              <option>CCTV Installation</option>
              <option>Event Security</option>
              <option>Bungalow / Farmhouse Security</option>
              <option>Commercial Property Security</option>
              <option>Logistics & Pharma Security</option>
              <option>Schools & Colleges Security</option>
              <option>Other / Custom</option>
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-red pointer-events-none">↓</span>
          </div>
          {errors.fservice && <p className="text-xs text-red mt-1">{errors.fservice}</p>}
        </div>

        <div>
          <label htmlFor="flocation" className="block text-[0.68rem] font-semibold tracking-[0.156rem] uppercase text-ink3 mb-2">
            Location
          </label>
          <input
            type="text"
            id="flocation"
            value={formData.flocation}
            onChange={handleChange}
            className="w-full p-3.5 bg-off border-2 border-border text-ink font-dm text-sm outline-none transition-all focus:border-red focus:bg-white"
            placeholder="City, State"
          />
        </div>

        <div>
          <label htmlFor="fmessage" className="block text-[0.68rem] font-semibold tracking-[0.156rem] uppercase text-ink3 mb-2">
            Message
          </label>
          <textarea
            id="fmessage"
            rows="4"
            value={formData.fmessage}
            onChange={handleChange}
            className="w-full p-3.5 bg-off border-2 border-border text-ink font-dm text-sm outline-none resize-y transition-all focus:border-red focus:bg-white"
            placeholder="Describe your security requirements in brief..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-red text-white text-sm font-semibold tracking-[0.156rem] uppercase relative overflow-hidden transition-all duration-300 hover:bg-red2 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(200,16,46,0.25)] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message →'}
        </button>
        <p className="text-xs text-ink3 text-center mt-3">🔒 Your information is kept strictly confidential</p>
      </form>
    </div>
  );
}