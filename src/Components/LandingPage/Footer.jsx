import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7] text-blue-900 w-[100%] md:w-[100%] mx-auto pt-5">
      {/* Top Contact Bar */}
      <div className="w-[80%] mx-auto justify-start items-start md:mx-auto px-6 py-6 flex flex-col md:flex-row  md:justify-between md:items-center text-sm gap-[7px] md:gap-[15px]">
        <div className="flex items-center gap-2 text-[15px]">
          <FaPhoneAlt />
          <span>(555) 123-4567</span>
        </div>

        <div className="flex items-center gap-2 text-[15px]">
          <FaEnvelope />
          <span>info@computenow.com</span>
        </div>

        <div className="flex items-center gap-2 text-[15px]">
          <FaMapMarkerAlt />
          <span>123 Compute Now, IT Park City, USA 123</span>
        </div>
      </div>

      <hr className="border-blue-700 w-[90%] mx-auto" />

      {/* Main Footer Content */}
      <div className="w-[80%] mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-20">
        {/* Left Section */}
        <div className="md:w-[80%] md:mx-auto">
          <img src="Group.svg" alt="Compute Now" className="mb-6 w-20" />
          <p className="text-cyan-500 mb-6 max-w-xs">
            Providing quality IT services for over 20 years.
          </p>

          <div className="flex gap-4 text-blue-900 mb-6">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
          </div>

          <ul className="space-y-3 text-cyan-500">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-2 text-[#47bec6] font-normal text-[16px] leading-tight">
            <li>About Us</li>
            <li>Services</li>
            <li>Case Studies</li>
            <li>Blogs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-6">Services</h3>
          <ul className="space-y-4 text-[#47bec6] font-normal text-[16px] leading-tight">
            <li>Web Applications</li>
            <li>Mobile Applications</li>
            <li>Custom Softwares</li>
            <li>Cloud & DevOps</li>
          </ul>
        </div>
      </div>

      <hr className="border-blue-700 w-[90%] mx-auto" />

      {/* Bottom Copyright */}
      <div className="text-center py-6 text-cyan-500 text-sm pb-10">
        © 2025 computenow. All rights reserved.
      </div>
    </footer>
  );
}
