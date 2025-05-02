import Image from "next/image";
import contactDarkImg from "../../public/images/contact-drak-img.png";
export default function Contact() {
  return (
    <>
      <div className="contact-otr  ">
        <div className="contact-inr px-39 max-desktop:px-10 max-tablet:px-5 flex items-center justify-center ">
          <div className="contact-content w-[393px]  relative max-laptop:hidden">
            <div className=" ">
              <Image
                className="rounded-tl-[40px] rounded-bl-[40px]"
                src={contactDarkImg}
                alt="contact img"
              />
            </div>
            <div className="absolute top-[97px] left-[20px] z-[3]">
              <p className="contact-heading font-gendy font-normal  text-[30px] pb-2.5 w-[330px]">
                Have a question or need a custom solution?
              </p>
              <p className="contact-desc font-medium text-[15px] w-[330px]">
                We’re here to help! Fill out the form below, and our team will
                get back to you as soon as possible. Let’s create something
                amazing together!
              </p>
            </div>
          </div>
          <div className="contact-form relative z-10 w-[571px]  max-tablet3:after:hidden">
            <div className="contact-form-inr  text-center bg-white/10 backdrop-blur-lg py-[39px] pl-[52px] pr-[64px] rounded-tr-[40px] rounded-br-[40px] max-laptop:rounded-tl-[40px] max-laptop:rounded-bl-[40px] max-tablet2:p-[20px]">
              <p className="font-gendy font-normal text-[30px]">
                Stay Updated{" "}
              </p>
              <div className="flex flex-col gap-[27px] pt-[30px]">
                <div className="contact-input-main flex items-center gap-[15px] max-tablet3:flex-col">
                  <div className="contact-input-otr w-full">
                    <input
                      className="contact-input placeholder:text-[#ffffff] text-[#ffffff] w-full font-quicksand font-normal text-[15px] py-3.5 px-3  border border-[#ffffff0f] bg-[#FFFFFF0F] outline-none focus:outline-none "
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                  <div className="contact-input-otr w-full">
                    <input
                      className="contact-input w-full placeholder:text-[#ffffff] text-[#ffffff]  font-quicksand font-normal text-[15px] py-3.5 px-3 border border-[#ffffff0f] bg-[#FFFFFF0F] outline-none focus:outline-none"
                      type="text"
                      placeholder="Surname"
                    />
                  </div>
                </div>
                <div className="contact-input-main flex items-center gap-[15px] ">
                  <div className="contact-input-otr w-full">
                    <input
                      className="contact-input w-full placeholder:text-[#ffffff] text-[#ffffff]  font-quicksand font-normal text-[15px] py-3.5 px-3 border border-[#ffffff0f] bg-[#FFFFFF0F] outline-none focus:outline-none"
                      type="text"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div className="contact-input-main flex items-center gap-[15px] max-tablet3:flex-col">
                  <div className="contact-input-otr w-full">
                    <input
                      className="contact-input w-full placeholder:text-[#ffffff] text-[#ffffff]  font-quicksand font-normal text-[15px] py-3.5 px-3 border border-[#ffffff0f] bg-[#FFFFFF0F] outline-none focus:outline-none"
                      type="text"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div className="contact-input-otr w-full">
                    <input
                      className="contact-input w-full placeholder:text-[#ffffff] text-[#ffffff]  font-quicksand font-normal text-[15px] py-3.5 px-3 border border-[#ffffff0f] bg-[#FFFFFF0F] outline-none focus:outline-none"
                      type="text"
                      placeholder="Postal Code"
                    />
                  </div>
                </div>
                <div className="contact-input-main flex items-center gap-[15px] ">
                  <div className="contact-input-otr w-full">
                    <textarea
                      className="contact-input placeholder:text-[#ffffff] text-[#ffffff] resize-none h-[159px] max-tablet3:h-[121px] w-full font-quicksand font-normal text-[15px] py-3.5 px-3 border border-[#ffffff0f] bg-[#FFFFFF0F] outline-none focus:outline-none"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
              </div>
              <div className="hero-action-otr  flex justify-center pt-[27px]">
                <div className="hero-action-inr cursor-pointer w-[195px] max-tablet3:w-[160px] text-center text-[#000000] font-medium text-[15px] p-1 rounded-3xl bg-[#ffffff]">
                  Get Started
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
