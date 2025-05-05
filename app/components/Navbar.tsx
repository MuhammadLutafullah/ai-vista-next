import Image from "next/image";
import logoImg from "../../public/images/Logo.svg";
import logoMobile from "../../public/images/mobile-logo.svg";
export default function Navbar() {
  return (
    <>
      <div className="navbar-otr bg-[#000000]">
        <div className="navbar-inr py-5 px-39 max-desktop:px-10 max-tablet:px-5  flex items-center max-laptop:justify-between  relative">
          <div className="logo-otr ">
            <Image
              className="logo max-tablet:w-[55px] max-laptop:hidden"
              src={logoImg}
              alt="Your Logo"
            />
            <Image
              className="cursor-pointer  hidden max-laptop:block"
              src={logoMobile}
              alt="Your Logo"
            />
          </div>
          <ul className="max-laptop:hidden max-desktop:relative   absolute left-2/4  -translate-x-2/4 ul-nav flex items-center gap-8 py-2 px-5 rounded-4xl bg-[#FFFFFF30]">
            <li className="li-nav">
              <a href="#" className="a-nav text-[#ffffff]">
                Home
              </a>
            </li>
            <li className="li-nav">
              <a href="#" className="a-nav text-[#ffffff]">
                About Us
              </a>
            </li>
            <li className="li-nav">
              <a href="#" className="a-nav text-[#ffffff]">
                Services
              </a>
            </li>
            <li className="li-nav">
              <a href="#" className="a-nav text-[#ffffff]">
                Case-Studies
              </a>
            </li>
            <li className="li-nav">
              <a href="#" className="a-nav text-[#ffffff]">
                Contact Us
              </a>
            </li>
            <li className="li-nav">
              <a href="#" className="a-nav text-[#ffffff]">
                Careers
              </a>
            </li>
          </ul>
          <div className="drawer drawer-end hidden max-laptop:flex max-laptop:justify-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
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
            <div className="drawer-side z-[33] ">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <li>
                  <a>Sidebar Item 1</a>
                </li>
                <li>
                  <a>Sidebar Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
