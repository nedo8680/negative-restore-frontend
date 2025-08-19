import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 py-6 text-center text-sm text-gray-600" id="donate">
      <p>&copy; 2025 Negative Restore. All rights reserved.</p>
      <div className="mt-2 space-x-4">
        <a href="/about" className="hover:underline">About Us</a>
        {/* <a href="/donate" className="hover:underline">Donate</a> */}
        <a href="/contact" className="hover:underline">Contact</a>
      </div>

      {/* Redes sociales */}
      <div className="mt-4 flex justify-center space-x-6 text-gray-600">
         <a 
          href="https://www.instagram.com/negativerestore" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-pink-500 transition"
        >
          <FaInstagram size={20} />
        </a>
        <a 
          href="https://x.com/negativerestore" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-black transition"
        >
          <FaXTwitter size={20} />
        </a>
        <a 
          href="https://facebook.com/negativerestore" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-600 transition"
        >
          <FaFacebookF size={20} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;