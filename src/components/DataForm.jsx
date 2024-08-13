import { useState, useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import bgImage from "../assets/bg.jpg";

const DataForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isButtonActive, setIsButtonActive] = useState(false);
  const [emailError, setEmailError] = useState("");

  const formRef = useRef(null);

  useEffect(() => {
    const currentFormRef = formRef.current;
    if (currentFormRef) {
      VanillaTilt.init(currentFormRef, {
        max: 25,
        speed: 400,
        glare: true,
        "max-glare": 0.5,
      });
    }

    return () => {
      if (currentFormRef) {
        currentFormRef.vanillaTilt.destroy();
      }
    };
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "email") {
      if (!validateEmail(value)) {
        setEmailError("Invalid email format");
      } else {
        setEmailError("");
      }
    }

    const isPhoneValid =
      formData.phone.length === 10 || (name === "phone" && value.length === 10);
    const isEmailValid =
      validateEmail(formData.email) ||
      (name === "email" && validateEmail(value));

    if (isPhoneValid && isEmailValid) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://backend-joinnow.onrender.com/submit",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Data submitted successfully");
        window.location.href = "/";
      } else {
        alert("Error submitting data");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting data");
    }
  };

  return (
    <div
      className="container mx-auto p-4 sm:p-6 md:p-8 shadow-lg py-10 sm:py-16 md:py-20 mt-16"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        ref={formRef}
        className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/2 m-auto p-10 sm:pb-16 md:pb-20 border-4 border-slate-600 rounded-lg shadow-xl"
        style={{
          background: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <h1 className="text-xl sm:text-2xl text-center font-bold text-white mb-4 sm:mb-6">
          Submit Your Data
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="relative z-0 w-full mb-4 sm:mb-5 group">
            <label
              htmlFor="name"
              className="block text-base sm:text-lg font-medium text-slate-200"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border-2 border-slate-400 bg-slate-900 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-100 text-white"
            />
          </div>

          <div className="mb-4 sm:mb-5">
            <label
              htmlFor="email"
              className="block text-base sm:text-lg font-medium text-slate-200"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-2 block w-full border-2 border-slate-400 bg-slate-900 rounded-md shadow-sm focus:outline-none focus:ring-slate-500 focus:border-slate-100 text-white"
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>

          <div className="mb-4 sm:mb-5">
            <label className="block text-base sm:text-lg font-medium text-slate-200">
              Phone:
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border-2 border-slate-400 bg-slate-900 rounded-md shadow-sm focus:outline-none focus:ring-slate-900 focus:border-slate-100 text-white"
              required
            />
          </div>

          <button
            type="submit"
            disabled={!isButtonActive}
            className={`w-full p-2 rounded text-white ${
              isButtonActive
                ? "bg-slate-100 hover:bg-black text-slate-950 hover:text-white"
                : "bg-slate-950 cursor-not-allowed"
            }`}
          >
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default DataForm;
