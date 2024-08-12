const About = () => {
  return (
    <div
      className="relative overflow-hidden mt-16"
      style={{ backgroundColor: "#3b0066" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-400 to-purple-500 opacity-50"></div>
      <div className="relative container mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-white mb-6">About Us</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">
            Our Mission
          </h2>
          <p className="text-white leading-relaxed">
            At [Your Company Name], our mission is to deliver exceptional
            services that exceed our clients&apos; expectations. We believe in
            innovation, integrity, and excellence, and strive to achieve these
            values in every project we undertake.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Our Team</h2>
          <p className="text-white leading-relaxed">
            Our team consists of highly skilled professionals who are experts in
            their respective fields. We work collaboratively to ensure that we
            deliver the best results for our clients. Our diverse backgrounds
            and experiences allow us to approach challenges from various
            perspectives, fostering creativity and effective problem-solving.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Our Values</h2>
          <ul className="list-disc list-inside text-white">
            <li className="mb-2">
              Integrity: We uphold the highest standards of honesty and
              transparency.
            </li>
            <li className="mb-2">
              Innovation: We embrace new ideas and technologies to provide
              cutting-edge solutions.
            </li>
            <li className="mb-2">
              Excellence: We are committed to delivering the highest quality in
              everything we do.
            </li>
            <li className="mb-2">
              Customer Focus: We prioritize the needs and satisfaction of our
              clients above all else.
            </li>
          </ul>
        </section>

        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-4">
            We would love to hear from you! If you have any questions or would
            like to learn more about our services, please do not hesitate to
            contact us. Our team is always ready to assist you and provide the
            information you need.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md shadow hover:bg-blue-600 transition duration-300"
          >
            Contact Us
          </a>
        </section>
      </div>
    </div>
  );
};

export default About;
