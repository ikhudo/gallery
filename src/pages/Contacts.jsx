import { useState, useMemo } from "react";
import useSEO, { BASE_URL } from "../hooks/useSEO";

const Contacts = () => {
  const jsonLd = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Oliwia Khudo",
      description:
        "Commission custom interior decoration artworks or purchase original paintings by Oliwia Khudo, a young artist based in Kraków, Poland.",
      url: `${BASE_URL}/contacts`,
      mainEntity: {
        "@type": "Person",
        name: "Oliwia Khudo",
        email: "info@oliwka.art",
        jobTitle: "Visual Artist",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kraków",
          addressCountry: "PL",
        },
      },
    }),
    [],
  );

  useSEO({
    title: "Contact — Commission Interior Decoration Artworks | Oliwka.art",
    description:
      "Commission custom interior decoration artworks or purchase original paintings for interior design by Oliwia Khudo. Young artist based in Kraków, Poland.",
    canonical: `${BASE_URL}/contacts`,
    ogImage: `${BASE_URL}/artist.webp`,
    jsonLd,
  });
  const user = "info";
  const domain = "oliwka.art";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Commission Inquiry",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleEmailClick = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${user}@${domain}`;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "993b8f73-bc4e-4af8-907c-96ea9647bdce",
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", subject: "Commission Inquiry", message: "" });
      } else {
        setStatus({
          type: "error",
          message: "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <main className="py-9">
      <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-earth-600 text-center mb-4">
        Get in Touch
      </h1>
      <p className="text-center max-w-md mx-auto mb-10 text-earth-800 leading-relaxed">
        Interested in commissioning a piece or purchasing original artwork? I'd
        love to hear from you.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-10 md:gap-12">
        {/* Contact Info */}
        <section>
          <h2 className="font-serif text-2xl text-earth-600 mb-5">
            Contact Information
          </h2>
          <ul className="flex flex-col gap-4">
            <li className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-widest text-earth-500">
                Email
              </span>
              <a
                href="#contact"
                onClick={handleEmailClick}
                className="text-earth-800 hover:underline cursor-pointer"
              >
                {user}@{domain}
              </a>
            </li>
            <li className="flex flex-col gap-1">
              <span className="text-xs uppercase tracking-widest text-earth-500">
                Hours
              </span>
              <span className="text-earth-800">By appointment only</span>
            </li>
          </ul>

          <div className="mt-8">
            <h3 className="font-serif text-lg text-earth-600 mb-3">
              Follow Along
            </h3>
            <div className="flex gap-5">
              <a
                href="#"
                className="text-sm text-earth-800 hover:underline"
                aria-label="Instagram"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-sm text-earth-800 hover:underline"
                aria-label="Pinterest"
              >
                Pinterest
              </a>
              <a
                href="#"
                className="text-sm text-earth-800 hover:underline"
                aria-label="Twitter"
              >
                Twitter
              </a>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <h2 className="font-serif text-2xl text-earth-600 mb-5">
            Send a Message
          </h2>

          {status.message && (
            <div
              className={`mb-5 p-4 rounded text-sm ${
                status.type === "success"
                  ? "bg-green-100 text-green-800 border border-green-300"
                  : "bg-red-100 text-red-800 border border-red-300"
              }`}
            >
              {status.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm text-earth-800">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="px-3.5 py-3 border border-warm-300 bg-cream-100 font-sans text-sm text-earth-900 rounded focus:outline-none focus:border-warm-600"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm text-earth-800">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="px-3.5 py-3 border border-warm-300 bg-cream-100 font-sans text-sm text-earth-900 rounded focus:outline-none focus:border-warm-600"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-sm text-earth-800">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="px-3.5 py-3 border border-warm-300 bg-cream-100 font-sans text-sm text-earth-900 rounded focus:outline-none focus:border-warm-600"
              >
                <option value="Commission Inquiry">Commission Inquiry</option>
                <option value="Purchase Inquiry">Purchase Inquiry</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm text-earth-800">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="px-3.5 py-3 border border-warm-300 bg-cream-100 font-sans text-sm text-earth-900 rounded resize-y min-h-[120px] focus:outline-none focus:border-warm-600"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="self-start md:self-auto w-full md:w-auto border border-warm-600 bg-transparent px-7 py-2.5 uppercase tracking-widest text-xs text-earth-500 cursor-pointer transition-colors hover:bg-earth-500 hover:text-white hover:border-earth-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Contacts;
