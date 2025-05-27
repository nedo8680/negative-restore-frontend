const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 py-6 text-center text-sm text-gray-600" id="donate">
      <p>&copy; 2025 Negative Restore. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="/about" className="hover:underline">About Us</a>
        {/* <a href="/donate" className="hover:underline">Donate</a> */}
        <a href="/contact" className="hover:underline">Contact</a>
      </div>
    </footer>
  );
}

export default Footer;