import Image from "next/image";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-[#0B0B10] text-white mt-20">
      <div className="max-w-3/4 m-auto grid grid-cols-1 md:grid-cols-6 gap-8 rounded py-15 px-5 ">
        <div className="col-span-1 md:col-span-2 space-y-2">
          <h3 className="text-sm font-semibold mb-2">Download Our App</h3>
          <div className="flex items-center space-x-2 mb-4">
            <Image
              src="/images/movie.jpg"
              alt="Moovie"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-bold text-yellow-500 text-2xl">Moovie</span>
          </div>
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="Download on the App Store"
              className="block"
            >
              <Image
                src="/images/app store.webp"
                alt="App Store"
                width={128}
                height={40}
                className="w-32"
              />
            </a>
            <a
              href="#"
              aria-label="Get it on Google Play"
              className="block"
            >
              <Image
                src="/images/google play.webp"
                alt="Google Play"
                width={128}
                height={40}
                className="w-32"
              />
            </a>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#" className="hover:text-yellow-500">Home</a></li>
            <li><a href="#" className="hover:text-yellow-500">My list</a></li>
            <li><a href="#" className="hover:text-yellow-500">About Us</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#" className="hover:text-yellow-500">General Info</a></li>
            <li><a href="#" className="hover:text-yellow-500">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-yellow-500">Terms of Service</a></li>
          </ul>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold mb-2">Contact Us:</h3>
          <p className="text-xs text-gray-400">support@eymovies.com</p>
          <p className="text-xs text-gray-400">Tel: +201045963322</p>
          <p className="text-xs text-gray-400">OR By Using:</p>
          <div className="flex space-x-3 mt-2 text-gray-400">
            <a href="#" aria-label="Facebook" className="hover:text-yellow-500 text-lg">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-yellow-500 text-lg">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Whatsapp" className="hover:text-yellow-500 text-lg">
              <FaWhatsapp />
            </a>
          </div>
        </div>
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold mb-2">Share Website Via:</h3>
          <div className="flex space-x-4 text-gray-400">
            <a href="#" aria-label="Facebook" className="hover:text-yellow-500 text-lg">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-yellow-500 text-lg">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500 text-xs">
        © 2023 Movies. All Rights Reserved.
      </div>
    </footer>
  );
}