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
        <div className="about-otr relative pt-12 pb-28 max-laptop:pb-12">
          <div className="about-inr px-39 max-desktop:px-10 max-tablet:px-5 flex justify-center gap-x-[50px] max-desktop:gap-x-[20px] max-laptop:flex-col">
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
                  [AI Vista Solutions]
                </span>
                , we are more than just a development company—we are innovators,
                problem solvers, and technology enthusiasts committed to
                building digital solutions that drive success. With a passion
                for cutting-edge development and a deep understanding of modern
                technology, we help businesses transform their ideas into
                scalable, high-performing solutions.
              </p>
              <p className="about-desc-2 pt-2">
                Our team of skilled developers, designers, and strategists work
                collaboratively to deliver seamless, user-friendly experiences.
                Whether it’s web development, mobile apps, or custom software
                solutions, we ensure that every project is tailored to meet the
                unique needs of our clients.
              </p>
              <div className="hero-action-otr mt-4 flex max-tablet:justify-center">
                <a
                  href="#"
                  className="hero-action-inr cursor-pointer w-[178px] max-tablet3:w-[150px] text-center text-warning-content font-medium text-[15px] p-2.5 rounded-3xl bg-error"
                  aria-label="Read more about AI Vista Solutions"
                >
                  Read More
                </a>
              </div>
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
