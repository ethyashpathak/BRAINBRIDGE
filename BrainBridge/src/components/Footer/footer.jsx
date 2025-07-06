const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black mt-12">
      <div className="max-w-6xl mx-auto py-6 px-4 text-center text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} BrainBridge. Made with ❤️ by Team JRP10.
      </div>
    </footer>
  );
};

export default Footer;

