import Image from "next/image";
import logoImg from "../../public/images/Logo.svg";
import logoMobile from "../../public/images/mobile-logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar-otr bg-[#000000]">
      <div className="navbar-inr py-5 px-39 max-desktop:px-10 max-tablet:px-5 flex items-center max-laptop:justify-between relative">
        {/* Logo Section */}
        <div className="logo-otr">
          <Image
            className="logo max-tablet:w-[55px] max-laptop:hidden"
            src={logoImg}
            alt="Your Logo"
          />
          <Image
            className="cursor-pointer hidden max-laptop:block"
            src={logoMobile}
            alt="Your Logo"
          />
        </div>

        {/* Navigation Menu */}
        <ul className="max-laptop:hidden max-desktop:relative absolute left-2/4 -translate-x-2/4 ul-nav flex items-center gap-8 py-2 px-5 rounded-4xl bg-[#FFFFFF30]">
          {[
            "Home",
            "About Us",
            "Services",
            "Case-Studies",
            "Contact Us",
            "Careers",
          ].map((item) => (
            <li key={item} className="li-nav">
              <a href="#" className="a-nav text-[#ffffff]">
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Drawer for Mobile */}
        <div className="drawer drawer-end hidden max-laptop:flex max-laptop:justify-end">
          <input id="drawer-toggle" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <label
              htmlFor="drawer-toggle"
              className="drawer-button cursor-pointer p-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(255,255,255,1)"
                className="w-6 h-6"
              >
                <path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path>
              </svg>
            </label>
          </div>
          <div className="drawer-side z-50">
            <label
              htmlFor="drawer-toggle"
              className="absolute top-5 right-5 z-50 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="rgba(255,255,255,1)"
                className="w-6 h-6"
              >
                <path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path>
              </svg>
            </label>
            <label
              htmlFor="drawer-toggle"
              aria-label="close sidebar"
              className="drawer-overlay"
            ></label>

            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              <li>
                <a href="#">Sidebar Item 1</a>
              </li>
              <li>
                <a href="#">Sidebar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
