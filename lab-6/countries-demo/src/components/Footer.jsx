const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-gray-400 text-center py-3 text-sm">
      © {new Date().getFullYear()} Country Dashboard. All rights reserved.
    </footer>
  );
};

export default Footer;
