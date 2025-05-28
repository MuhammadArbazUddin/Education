import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import Form from "./Form";
import { Link } from "react-router-dom";
import logo from "../assets/logo/512x512.png";

const SocialMediaLinks = () => (
  <div
    className="px-4 pt-8 sm:px-8 sm:pt-16"
    style={{
      boxShadow: "inset 0 -270px 180px #1a1a19, inset 0 300px 130px #1a1a19",
      background:
        "url('https://cdn.prod.website-files.com/66964d12f0212962622e6bd4/66a8b3a0d42be9aa880c1dbc_footer-01.jpg')",
    }}
  >
    {/* Top Social Links */}
    <div className="flex flex-wrap gap-4 sm:gap-0 sm:flex-nowrap items-center justify-between border-b-2 pb-8">
      <a
        href="https://www.instagram.com/sociallywiredinc/profilecard/?igsh=MTNnMnFzdWx1YW5pZQ%3D%3D"
        target="_blank"
        className="flex text-lg sm:text-2xl items-center gap-2"
      >
        <img
          className="w-6 sm:w-8"
          src="https://cdn.prod.website-files.com/66964d12f0212962622e6bd4/6697510e294ac7131f0db08f_instagram.svg"
          alt="Instagram"
        />
        Instagram
      </a>
      <a
        target="_blank"
        href="https://www.facebook.com/people/Socially-wired-Inc/61565652324656/?mibextid=LQQJ4d&rdid=FQoeOoh5RUUpgRxQ&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2FCh4GsGhjoMJXrrVo%2F%3Fmibextid%3DLQQJ4d"
        className="flex text-lg sm:text-2xl items-center gap-2"
      >
        <img
          className="w-6 sm:w-8"
          src="https://cdn.prod.website-files.com/66964d12f0212962622e6bd4/6697510ec7edab92c91c3113_facebook.svg"
          alt="Facebook"
        />
        Facebook
      </a>
      <a
        href="https://www.linkedin.com/company/socially-wired-inc/"
        className="flex text-lg sm:text-2xl items-center gap-2"
        target="_blank"
      >
        <img
          className="w-6 sm:w-8"
          src="https://cdn.prod.website-files.com/66964d12f0212962622e6bd4/6697510fb122053d5e1a8d67_linkedin.svg"
          alt="LinkedIn"
        />
        LinkedIn
      </a>
    </div>
    {/* Main Content Section */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-8 py-8 text-white">
      <div>
        <a href="#" className="text-lg">
          <img className="w-12 sm:w-32" alt="Event Plan" src="https://laureate.org.uk/public/uploads/main/files/09-04-2025/litalogo.png.webp" />
        </a>
      </div>
      <div>
        <a href="#pages" className="text-xl sm:text-2xl font-semibold">
          Pages
        </a>
        <ul className="pt-4 space-y-2">
          <li>
            <a href="#home" className="text-base sm:text-lg">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="text-base sm:text-lg">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="text-base sm:text-lg">
              Services
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="space-y-2">
          <li>
            <a href="#privacy" className="text-base sm:text-lg">
              Toronto, Ontario Canada
            </a>
          </li>
          <li>
            <a href="#terms" className="text-base sm:text-lg">
              +1 (519) 697-8425{" "}
            </a>
          </li>
          <li>
            <a href="#terms" className="text-base sm:text-lg">
              support@sociallywiredinc.com{" "}
            </a>
          </li>
          <li>
            <Link to="/privacy-policy" className="text-base sm:text-lg">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="space-y-2">
          <li>
            <a
              href="mailto:contact@example.com"
              className="text-base sm:text-lg"
            >
              ©Arbaz All Rights Reserved
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="max-w-xs ml-[-30px] ">
      <Form />
    </div>
  </div>
);

export default SocialMediaLinks;
