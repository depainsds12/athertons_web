import { Link } from "react-router-dom";
import triangleg from "../../../assets/triangleg.svg";
import trianglew from "../../../assets/trianglew.svg";
import { axiosInstance } from "../../../api/config";
import Popup from "../../../components/common/Popup";
import { useState, useEffect } from "react";

const NewandContactus = ({ apiData }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    company_name: "",
    subject: "",
    message: "",
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  useEffect(() => {
    if (showSuccessPopup) {
      const timer = setTimeout(() => {
        setShowSuccessPopup(false);
      }, 15000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessPopup]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("first_name", formData.first_name);
      formDataToSend.append("last_name", formData.last_name);
      formDataToSend.append("phone", formData.phone);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("company_name", formData.company_name);
      formDataToSend.append("subject", formData.subject);
      formDataToSend.append("message", formData.message);

      for (let [key, value] of formDataToSend.entries()) {
        console.log(key, value);
      }

      await axiosInstance.post("/contactus/store", formDataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setShowSuccessPopup(true);

      setFormData({
        first_name: "",
        last_name: "",
        phone: "",
        email: "",
        company_name: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className=" relative flex flex-col xl:flex-row w-full justify-between  pb-12 mt-16 section_padding mx-auto"
      aria-label="News and Contact Section"
    >
      {showSuccessPopup && (
        <Popup
          message="Thanks! Your message was sent successfully."
          onClose={() => setShowSuccessPopup(false)}
        />
      )}
      <div className="w-full xl:w-1/2 pr-0 xl:pr-[60px]">
        <h2
          className="font-poppins font-semibold text-[#192437] text-[28px] md:text-[32px] xl:text-[36px] leading-[100%] mb-8"
          aria-label="News and Insights"
        >
          News & Insights
        </h2>

        <ul className="space-y-6" role="list" aria-labelledby="news-list">
          {apiData.map((item) => (
            <li
              key={item.id}
              role="listitem"
              className="group flex flex-col items-start gap-4 sm:flex-row"
              aria-label="News Item"
            >
              <img
                src={item.featured_image}
                alt="Tŷ Menai Project"
                className="object-cover w-full h-[200px] sm:w-[220px] sm:h-[165px] xl:w-[234px] xl:h-[177px] transition-transform duration-500 ease-in-out animate__animated animate__zoomIn group-hover:scale-105"
              />
              <div className="flex flex-col gap-2">
                <h3
                  className="font-poppins font-semibold text-[20px] leading-[100%]"
                  aria-label="News Heading"
                >
                  {item.title}
                </h3>
                <p
                  className="font-poppins font-normal text-[16px] leading-[28px]"
                  aria-label="News Description"
                >
                  {item.excerpt}
                </p>
                <Link
                  to={"/newsandinsight/1"}
                  aria-label="View Details"
                  className="underline text-[#03837E] font-poppins font-medium text-[18px] leading-[100%] hover:text-[#02635f] cursor-pointer"
                >
                  View Details
                </Link>
              </div>
            </li>
          ))}
        </ul>

        <button
          onClick={() => {
            window.location.href = "/newsandinsight";
          }}
          type="button"
          aria-label="View All News and Insights"
          className="w-full xl:w-[511px] h-[48px] bg-[#03837E] text-white cursor-pointer hover:border hover:border-[#03837E] hover:bg-[#FFFFFF] hover:text-[#03837E] font-poppins font-medium text-[18px] text-center mt-8"
        >
          View All News & Insights
        </button>
      </div>

      <div className="flex flex-col items-center w-full mt-12 xl:w-1/2 text-left xl:mt-0">
        <h2
          className="font-poppins font-semibold text-[#192437] text-[28px] md:text-[32px] xl:text-[36px] leading-[100%] mb-8 xl:ml-6"
          aria-label="Contact Us"
        >
          Contact Us
        </h2>
        <form
          aria-label="Contact Us Form"
          className="bg-[#F4F4F5] p-6 md:p-8 w-full max-w-[600px] flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              <label
                htmlFor="firstName"
                className="text-xs md:text-sm font-semibold mb-1 text-[#192437]"
              >
                First Name*
              </label>
              <input
                type="text"
                name="first_name"
                required
                value={formData.first_name}
                onChange={handleInputChange}
                className="border border-[#D6D6D6] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#03837E] bg-white h-[50px]"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label
                htmlFor="lastName"
                className="text-xs md:text-sm font-semibold mb-1 text-[#192437]"
              >
                Last Name*
              </label>
              <input
                id="lastName"
                type="text"
                name="last_name"
                required
                value={formData.last_name}
                onChange={handleInputChange}
                className="border border-[#D6D6D6] px-3 py-2 text-sm bg-white h-10 sm:h-[50px] focus:outline-none focus:ring-2 focus:ring-[#03837E]"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-xs md:text-sm font-semibold mb-1 text-[#192437]"
            >
              Email Address*
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              className="border border-[#D6D6D6] px-3 py-2 text-sm bg-white h-10 sm:h-[50px] focus:outline-none focus:ring-2 focus:ring-[#03837E]"
              onInvalid={(e) =>
                e.target.setCustomValidity(
                  "Please enter a valid email address"
                )
              }
              onInput={(e) => e.target.setCustomValidity("")}
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="phone"
              className="text-xs md:text-sm font-semibold mb-1 text-[#192437]"
            >
              Phone Number*
            </label>
            <input
              id="phone"
              name="phone"
              inputMode="numeric"
              required
              pattern="^\d{7,15}$"
              maxLength={15}
              value={formData.phone}
              onChange={handleInputChange}
              onInvalid={(e) => {
                e.target.setCustomValidity(
                  "Please enter a valid phone number (7–15 digits only)"
                );
              }}
              onInput={(e) => e.target.setCustomValidity("")}
              className="border border-[#D6D6D6] px-3 py-2 text-sm bg-white h-10 sm:h-[50px] focus:outline-none focus:ring-2 focus:ring-[#03837E]"
            />
          </div>

          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              <label
                htmlFor="company"
                className="text-xs md:text-sm font-semibold mb-1 text-[#192437]"
              >
                Company Name*
              </label>
              <input
                id="company"
                type="text"
                name="company_name"
                required
                value={formData.company_name}
                onChange={handleInputChange}
                className="border border-[#D6D6D6] px-3 py-2 text-sm bg-white h-10 sm:h-[50px] focus:outline-none focus:ring-2 focus:ring-[#03837E]"
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label
                htmlFor="subject"
                className="text-xs md:text-sm font-semibold mb-1 text-[#192437]"
              >
                Subject*
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                required
                value={formData.subject}
                onChange={handleInputChange}
                className="border border-[#D6D6D6] px-3 py-2 text-sm bg-white h-10 sm:h-[50px] focus:outline-none focus:ring-2 focus:ring-[#03837E]"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="message"
              className="text-xs md:text-sm font-semibold mb-1 text-[#192437]"
            >
              Your Message
            </label>
            <textarea
              id="message"
              rows={4}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="border border-[#D6D6D6] px-3 py-2 text-sm bg-white resize-none h-[120px] focus:outline-none focus:ring-2 focus:ring-[#03837E]"
            />
          </div>

          <button
            type="submit"
            aria-label="Submit Contact Us Form"
            disabled={isSubmitting}
            className={`h-10 sm:h-[48px] bg-[#03837E] text-white font-medium mt-4 cursor-pointer hover:border hover:border-[#03837E] hover:bg-[#FFFFFF] hover:text-[#03837E] transition-colors ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Submitting..." : "Contact Us"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewandContactus;
