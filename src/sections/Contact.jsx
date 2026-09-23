import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiLoader,
  FiMapPin,
} from "react-icons/fi";

const Contact = () => {
  const form = useRef(null);

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const sendEmail = async (event) => {
    event.preventDefault();

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message: "Email service is not configured.",
      });

      return;
    }

    setLoading(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        {
          publicKey,
        }
      );

      setStatus({
        type: "success",
        message: "Your message has been sent successfully!",
      });

      form.current?.reset();
    } catch (error) {
      console.error("EmailJS error:", error);

      setStatus({
        type: "error",
        message: "Message could not be sent. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#3857ff] px-5 py-24 text-white sm:px-8 lg:px-16 lg:py-32"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d8ff52]">
            Have a project in mind?
          </p>

          <h2 className="mt-6 text-[clamp(3.8rem,10vw,9rem)] font-black uppercase leading-[0.8] tracking-[-0.075em]">
            Let&apos;s make it
            <span className="block font-serif font-normal normal-case italic text-[#d8ff52]">
              unmissable.
            </span>
          </h2>
        </div>

        <div className="grid overflow-hidden border border-white/25 lg:grid-cols-[0.75fr_1.25fr]">
          {/* Left Information */}
          <div className="border-b border-white/20 bg-black/10 p-7 sm:p-10 lg:border-b-0 lg:border-r">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d8ff52]">
              Let&apos;s work together
            </p>

            <h3 className="mt-6 text-3xl font-black leading-tight tracking-[-0.04em] sm:text-4xl">
              Have an idea that needs a strong visual direction?
            </h3>

            <p className="mt-6 leading-8 text-blue-100">
              I&apos;m available for freelance projects, collaborations, and
              full-time graphic-design opportunities.
            </p>

            {/* Information */}
            <div className="mt-10 space-y-4 border-t border-white/20 pt-8">
              <div className="flex items-center gap-3">
                <FiMapPin className="text-[#d8ff52]" />

                <span className="text-sm">Mohali, Punjab</span>
              </div>

              <div className="flex items-center gap-3">
                <FiCheckCircle className="text-[#d8ff52]" />

                <span className="text-sm">
                  Available for freelance and full-time work
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#f5f1e8] p-7 text-black sm:p-10 lg:p-12">
            <h3 className="text-3xl font-black tracking-[-0.04em]">
              Send a message
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Share your project requirements and I&apos;ll respond as soon as
              possible.
            </p>

            <form
              ref={form}
              onSubmit={sendEmail}
              className="mt-8 space-y-5"
            >
              {/* Name and Email */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="user_name"
                    className="mb-2 block text-sm font-bold"
                  >
                    Your name
                  </label>

                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                    className="w-full border border-black/20 bg-transparent px-4 py-3.5 outline-none transition placeholder:text-gray-400 focus:border-[#3857ff] focus:ring-2 focus:ring-[#3857ff]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="user_email"
                    className="mb-2 block text-sm font-bold"
                  >
                    Email address
                  </label>

                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    placeholder="Enter your email"
                    autoComplete="email"
                    required
                    className="w-full border border-black/20 bg-transparent px-4 py-3.5 outline-none transition placeholder:text-gray-400 focus:border-[#3857ff] focus:ring-2 focus:ring-[#3857ff]/10"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-bold"
                >
                  Subject
                </label>

                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Logo, branding, social media..."
                  required
                  className="w-full border border-black/20 bg-transparent px-4 py-3.5 outline-none transition placeholder:text-gray-400 focus:border-[#3857ff] focus:ring-2 focus:ring-[#3857ff]/10"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Tell me about your project..."
                  required
                  className="w-full resize-none border border-black/20 bg-transparent px-4 py-3.5 outline-none transition placeholder:text-gray-400 focus:border-[#3857ff] focus:ring-2 focus:ring-[#3857ff]/10"
                />
              </div>

              {/* Status */}
              {status.message && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`border px-4 py-3 text-sm font-semibold ${
                    status.type === "success"
                      ? "border-green-600/30 bg-green-600/10 text-green-700"
                      : "border-red-600/30 bg-red-600/10 text-red-700"
                  }`}
                >
                  {status.message}
                </div>
              )}

              {/* Button */}
              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-[#ff563d] hover:text-black disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:w-auto"
              >
                {loading ? (
                  <>
                    <FiLoader className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FiArrowUpRight />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;