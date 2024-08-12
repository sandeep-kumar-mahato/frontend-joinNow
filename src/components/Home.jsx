const Home = () => {
  return (
    <div className="relative overflow-hidden text-center py-20 bg-gradient-to-r from-purple-900 via-pink-800 to-purple-900">
      <div className="relative w-4/5 mx-auto px-6 py-12">
        <h1 className="text-4xl font-extrabold text-white mb-6">
          Welcome to My Website
        </h1>
        <p className="text-lg text-pink-200 leading-relaxed mb-6">
          This is the home page of my website. Here you can find various
          information about the services we offer, latest updates, and more. We
          are dedicated to providing the best experience for our visitors and
          clients.
        </p>
        <div className="bg-purple-800 p-6 rounded-lg shadow-md mx-auto max-w-4xl border-2 border-pink-600">
          <h2 className="text-2xl font-semibold text-pink-200 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-pink-100 leading-relaxed">
            Our website is designed with you in mind. We offer top-notch
            services, a user-friendly experience, and a commitment to
            excellence. Whether you&apos;re looking for detailed information,
            support, or just exploring, we are here to help you every step of
            the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
