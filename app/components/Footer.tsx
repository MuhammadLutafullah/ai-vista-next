import Image from "next/image";
import logo from "../../public/images/Logo.svg";
import socialIcon from "../../public/images/Linkedin-icon.svg";
import ukIcon from "../../public/images/uk-icon.svg";
import usIcon from "../../public/images/us-icon.svg";
import sdIcon from "../../public/images/ud-icon.svg";
import pkIcon from "../../public/images/pk-icon.svg";
import phoneIcon from "../../public/images/phone-icon.svg";
import mailIcon from "../../public/images/mail-icon.svg";
import { log } from "console";
export default function Footer() {
  return (
    <>
      <div className="footer-otr mt-28 border-t border-white">
        <div className="footer-inr px-39 max-desktop:px-10 max-tablet:px-5  pt-[50px] pb-[20px]">
          <div className="footer-row flex justify-between border-b border-white pb-[50px] max-laptop:flex-col max-laptop:gap-y-[40px]">
            <div className="footer-logo-box flex flex-col gap-y-[20px] items-center w-[174px] max-laptop:flex-row max-laptop:w-full max-laptop:justify-center max-laptop:gap-x-[20px] ">
              <Image
                className="cursor-pointer max-laptop:w-[70px] max-laptop:h-[70px]"
                src={logo}
                alt="Your Logo"
              />
              <div className="flex flex-col gap-[10px] items-center">
                <p className="font-normal text-[15px] max-laptop:hidden">
                  Social Links
                </p>
                <Image
                  className="cursor-pointer"
                  src={socialIcon}
                  alt="Your Logo"
                />
              </div>
            </div>
            <div className="flex gap-[55px] flex-wrap max-laptop:justify-center max-laptop:gap-[20px] max-tablet3:flex-col max-tablet3:items-center max-tablet3:text-center">
              <div className="footer-links-otr w-[102px] max-tablet3:w-full">
                <p className="font-questrial font-normal text-[20px] pb-2.5">
                  Quick Links
                </p>
                <ul className="flex flex-col gap-[15px]">
                  <li className="font-quicksand font-medium text-[15px] cursor-pointer">
                    Home
                  </li>
                  <li className="font-quicksand font-medium text-[15px] cursor-pointer">
                    About Us
                  </li>
                  <li className="font-quicksand font-medium text-[15px] cursor-pointer">
                    Services
                  </li>
                  <li className="font-quicksand font-medium text-[15px] cursor-pointer">
                    Company
                  </li>
                </ul>
              </div>
              <div className="footer-links-otr w-[164px] max-tablet3:w-full">
                <p className="font-questrial font-normal text-[20px] pb-2.5">
                  Services
                </p>
                <ul className="flex flex-col gap-[15px] max-tablet3:items-center">
                  <li className="font-quicksand font-medium text-[15px] cursor-pointer">
                    Software Development
                  </li>
                  <li className="font-quicksand font-medium text-[15px] cursor-pointer">
                    Website Development
                  </li>
                  <li className="font-quicksand font-medium text-[15px] cursor-pointer">
                    Data Science
                  </li>
                  <li className="font-quicksand font-medium text-[15px] cursor-pointer">
                    Others
                  </li>
                </ul>
              </div>
              <div className="footer-links-otr w-[113px] max-tablet3:w-full">
                <p className="font-questrial font-normal text-[20px] pb-2.5">
                  Locations
                </p>
                <ul className="flex flex-col gap-[15px] max-tablet3:items-center">
                  <li className="font-quicksand font-medium text-[15px] cursor-pointer flex items-center gap-[10px]">
                    Uk
                    <Image
                      className="w-3.5 h-3.5 rounded-full"
                      src={ukIcon}
                      alt="img"
                    />
                  </li>
                  <li className="font-quicksand font-medium text-[15px] cursor-pointer flex items-center gap-[10px]">
                    United State
                    <Image
                      className="w-3.5 h-3.5 rounded-full"
                      src={usIcon}
                      alt="img"
                    />
                  </li>
                  <li className="font-quicksand font-medium text-[15px] cursor-pointer flex items-center gap-[10px]">
                    Saudi Arabia
                    <Image
                      className="w-3.5 h-3.5 rounded-full"
                      src={sdIcon}
                      alt="img"
                    />
                  </li>
                  <li className="font-quicksand font-medium text-[15px] cursor-pointer flex items-center gap-[10px]">
                    Pakistan
                    <Image
                      className="w-3.5 h-3.5 rounded-full"
                      src={pkIcon}
                      alt="img"
                    />
                  </li>
                </ul>
              </div>
              <div className="footer-links-otr w-[208px] max-tablet3:w-full">
                <p className="font-questrial font-normal text-[20px] pb-2.5">
                  Contact Us
                </p>
                <ul className="flex flex-col gap-[10px] max-tablet3:items-center">
                  <li className="font-quicksand font-medium text-[15px] cursor-pointer flex items-center gap-[10px]">
                    <Image className=" w-4 h-4" src={phoneIcon} alt="img" />
                    44-7970128689
                  </li>
                  <li className="font-quicksand font-medium text-[15px] cursor-pointer flex items-center gap-[10px]">
                    United State:
                  </li>
                  <li className="font-quicksand font-medium text-[15px] cursor-pointer flex items-center gap-[10px]">
                    <Image className=" w-4 h-4" src={phoneIcon} alt="img" />
                    +966-568238964
                  </li>
                  <li className="font-quicksand font-medium text-[15px] cursor-pointer flex items-center gap-[10px]">
                    <Image className=" w-4 h-4" src={phoneIcon} alt="img" />
                    +92-3052233404
                  </li>
                  <li className="font-quicksand font-medium text-[15px] cursor-pointer flex items-center gap-[10px]">
                    <Image className=" w-4 h-4" src={mailIcon} alt="img" />
                    info@aivistasolutions.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
