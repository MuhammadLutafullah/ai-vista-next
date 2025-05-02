import Image from "next/image";
import starWhite from "../../public/images/hero-star-white.svg";
import valueIcon1 from "../../public/images/value-icon1.svg";
import valueIcon2 from "../../public/images/value-icon2.svg";
import valueIcon3 from "../../public/images/value-icon3.svg";
import valueIcon4 from "../../public/images/value-icon4.svg";
import valueIcon5 from "../../public/images/value-icon5.svg";
import valueIcon6 from "../../public/images/value-icon6.svg";
import valueIcon7 from "../../public/images/value-icon7.svg";

export default function Value() {
  // Array of value icons
  const valueIcons = [
    valueIcon1,
    valueIcon2,
    valueIcon3,
    valueIcon4,
    valueIcon5,
    valueIcon6,
    valueIcon7,
    valueIcon7,
  ];

  return (
    <>
      <div className="value-otr pb-28 max-laptop:pb-12 px-39 max-desktop:px-10 max-tablet:px-5">
        <div className="value-inr text-center">
          <div className="tagline-otr flex items-center justify-center gap-[5px]">
            <Image className="star1" src={starWhite} alt="Star Icon" />
            <p className="font-gendy font-normal text-[20px] text-[#00FFFF]">
              Valued
            </p>
            <Image className="star2" src={starWhite} alt="Star Icon" />
          </div>
          <p className="about-heading font-gendy font-normal text-[60px] max-tablet:text-[40px]">
            SUCCESS STORIES
          </p>
          <p className="value-desc">
            Empowering businesses with our leading-edge software solutions.
          </p>
          <div className="value-row flex justify-center gap-x-[15px] gap-y-[12px] flex-wrap pt-3">
            {valueIcons.map((icon, index) => (
              <div className="value-box-otr max-tablet2:w-full" key={index}>
                <div className="value-box-inr shadow-lg w-[292px] max-tablet2:w-full h-[101px] rounded-[15px] flex items-center justify-center bg-[#ffffff]">
                  <Image src={icon} alt={`Value Icon ${index + 1}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
