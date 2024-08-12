const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4">
      <div className="container mx-auto text-center text-gray-300">
        © {new Date().getFullYear()} My Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
