import Image from "next/image";
import aboutImg1 from "../../public/images/about-us-img1.png";
import aboutImg2 from "../../public/images/about-us-img2.png";
import aboutImg3 from "../../public/images/about-us-img3.png";
import aboutRight from "../../public/images/about-right.svg";
export default function AboutUs() {
  return (
    <>
      <section
        className="relative overflow-hidden"
        aria-label="About Us section"
      >
        <div className="about-otr relative pt-28 pb-28 max-laptop:pb-12">
          <div className="flex items-center justify-center pb-3">
             <div className="inline-flex items-center gap-2 bg-white/5 rounded-full px-3 py-1.5 lg:px-5 lg:py-2.5 mb-4 lg:mb-8">
            <div className="w-1.5 h-1.5 lg:w-2 lg:h-2 rounded-full bg-[#00a8a8]"></div>
            <span className="text-[#00a8a8] text-xs lg:text-sm font-medium font-quicksand uppercase tracking-wider">
              About
            </span>
          </div>
          </div>
          <div className="about-inr px-39 max-desktop:px-10 max-tablet:px-5 flex justify-center items-center gap-x-[50px] max-desktop:gap-x-[20px] max-laptop:flex-col">
            <div className="about-images flex gap-[13px] w-[574px] max-laptop:w-full max-tablet:hidden">
              <div className="about-img1-otr max-laptop:w-full">
                <Image
                  className="about-img1 rounded-[20px] max-laptop:w-full max-laptop:h-[500px] object-cover"
                  src={aboutImg1}
                  alt="Innovative AI team collaboration"
                />
              </div>
              <div className="about-small-imgs-otr flex flex-col gap-[11px] max-laptop:w-full">
                <div className="about-img2-otr">
                  <Image
                    className="about-img2 rounded-[20px] max-laptop:w-full max-laptop:h-[244px] object-cover"
                    src={aboutImg2}
                    alt="Creative development process"
                  />
                </div>
                <div className="about-img3-otr">
                  <Image
                    className="about-img3 rounded-[20px] max-laptop:w-full max-laptop:h-[244px] object-cover"
                    src={aboutImg3}
                    alt="AI-powered solutions showcase"
                  />
                </div>
              </div>
            </div>
            <div className="about-content w-[551px] max-laptop:w-full max-tablet:text-center">
              <p className="about-heading font-gendy font-normal text-[60px] max-tablet:text-[50px]">
                About Us
              </p>
              <p className="about-desc-1">
                At{" "}
                <span className="about-highlight text-[#00FFFF] font-medium">
                  [tekstack]
                </span>
                , we are more than just a development company—we are innovators,
                problem solvers, and technology enthusiasts committed to
                building digital solutions that drive success. With a passion
                for cutting-edge development and a deep understanding of modern
                technology, we help businesses transform their ideas into
                scalable, high-performing solutions.
              </p>
              <p className="about-desc-2 pt-2">
                Our team of developers and AI specialists builds intelligent, user-friendly solutions, integrating AI to deliver smarter, faster, and more personalized experiences across web, mobile, and custom software tailored to your needs. We turn data into actionable insights to drive real results.
              </p>
             
            </div>
          </div>
        </div>
        <Image
          className="absolute -top-[209px] -rotate-30 -right-[25px] max-laptop:hidden"
          src={aboutRight}
          alt=""
          aria-hidden="true"
        />
        <Image
          className="absolute -top-[209px] -rotate-73 -left-[79px] max-laptop:hidden"
          src={aboutRight}
          alt=""
          aria-hidden="true"
        />
      </section>
    </>
  );
}
