import Image from "next/image";
import starWhite from "../../public/images/hero-star-white.svg";
import starBlue from "../../public/images/hero-star-blue.svg";
export default function Hero() {
  return (
    <>
      <div className="hero-otr bg-[#000000] py-[51px]  flex justify-center relative z-[3]">
        <div className="video-wrapper  w-full h-full absolute z-[-1]">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/hero-gif.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
        <div className="hero-inr px-39 max-desktop:px-10 max-tablet:px-5 ">
          <div className="tagline-otr flex items-center justify-center gap-[5px]">
            <Image className="star1" src={starWhite} alt="Your Logo" />
            <p className="tagline-text1 text-[#ffffff] font-quicksand font-semibold text-[15px] max-tablet2:text-[12px]">
              SMART SOLUTIONS -{" "}
              <span className="relative left-[-5px] tagline-text2 text-[#00A8A8] font-quicksand font-semibold text-[15px] max-tablet2:text-[12px]">
                 SMARTER FUTURE
              </span>
            </p>
            <Image className="star2" src={starBlue} alt="Your Logo" />
          </div>
          <div className="hero-heading-otr flex items-baseline gap-[6px] max-laptop:justify-center">
            <p className="hero-heading text-[#ffffff] font-questrial font-semibold text-[60px] max-laptop:text-[40px] max-tablet2:text-[28px]">
              Unlock the future With Ai
            </p>
            <span className="block hero-heading-dot bg-[#00A8A8] w-3 h-3 rounded-full max-tablet2:w-2 max-tablet2:h-2"></span>
          </div>
          <p className="hero-desc max-w-[700px] text-[#ffffff] font-quicksand font-semibold text-[18px] max-tablet2:text-[14px] text-center">
            We turn ambitious concepts into dependable digital
            realities—seamlessly, swiftly,  and with craftsmanship woven into
            every step.
          </p>
          <div className="hero-action-otr mt-4 flex justify-center">
            <div className="hero-action-inr cursor-pointer w-[251px] max-tablet3:w-[198px] text-center text-[#000000] font-medium text-[15px] p-2.5 rounded-3xl bg-[#ffffff]">
              Get Started
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
