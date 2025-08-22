const Footer = () => {
  return (
    <footer className="bg-amber-600/75 py-4 mt-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center text-sm">
        <p className="mt-2 md:mt-0">
          Created with ❤️ by
          <span className="px-1 font-semibold">Vikas Singh </span>
        </p>
        <p className="px-2">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
