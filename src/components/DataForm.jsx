import { useState } from "react";

const DataForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [isButtonActive, setIsButtonActive] = useState(false);
  const [emailError, setEmailError] = useState("");

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
        setIsButtonActive(false);
      } else {
        setEmailError("");
      }
    }

    // Activate button only if phone number is 10 digits and email is valid
    if (
      name === "phone" &&
      value.length === 10 &&
      validateEmail(formData.email)
    ) {
      setIsButtonActive(true);
    } else {
      setIsButtonActive(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

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
    <div className="container mx-auto p-4 sm:p-6 md:p-8 bg-gradient-to-r from-blue-100 to-teal-100 rounded-lg shadow-md py-10 sm:py-16 md:py-20 mt-16">
      <div className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 xl:w-1/4 m-auto pb-10 sm:pb-16 md:pb-20">
        <h1 className="text-xl sm:text-2xl text-center font-bold text-gray-800 mb-4 sm:mb-6">
          Submit Your Data
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="relative z-0 w-full mb-4 sm:mb-5 group">
            <label
              htmlFor="name"
              className="block text-base sm:text-lg font-medium text-gray-700"
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
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="mb-4 sm:mb-5">
            <label
              htmlFor="email"
              className="block text-base sm:text-lg font-medium text-gray-700"
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
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>

          <div className="mb-4 sm:mb-5">
            <label className="block text-base sm:text-lg font-medium text-gray-700">
              Phone:
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>

          <button
            type="submit"
            disabled={!isButtonActive}
            className={`w-full p-2 rounded text-white ${
              isButtonActive
                ? "bg-blue-500 hover:bg-blue-700"
                : "bg-gray-300 cursor-not-allowed"
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
