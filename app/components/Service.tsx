import Image from "next/image";
import serviceIcon1 from "../../public/images/service-icon-1.svg";
import serviceIcon2 from "../../public/images/service-icon-2.svg";
import serviceIcon3 from "../../public/images/service-icon-3.svg";
import serviceIcon4 from "../../public/images/service-icon-4.svg";
import serviceIcon5 from "../../public/images/service-icon-5.svg";
import serviceIcon6 from "../../public/images/service-icon-6.svg";
import serviceIcon7 from "../../public/images/serviceIcon7.svg";
import serviceIcon8 from "../../public/images/serviceIcon8.svg";

const services = [
  {
    icon: serviceIcon1,
    title: "Artificial Intelligence & Machine Learning",
    description:
      "Tailored software solution crafted to fit your unique business needs.",
    bgColor: "rgba(127, 0, 255, 1)",
    bgShadow: "0px 13px 36.3px 0px rgba(127, 0, 255, 0.65)",
  },
  {
    icon: serviceIcon2,
    title: "Web Development Services",
    description:
      "Tailored software solution crafted to fit your unique business needs.",
    bgColor: "rgba(0, 168, 168, 1)",
    bgShadow: " 0px 13px 27.7px 0px rgba(0, 168, 168, 0.65)",
  },
  {
    icon: serviceIcon3,
    title: "UI/UX Design Services",
    description:
      "Tailored software solution crafted to fit your unique business needs.",
    bgColor: "rgba(230, 158, 33, 1)",
    bgShadow: " 0px 13px 34.7px 0px rgba(230, 158, 33, 0.65)",
  },
  {
    icon: serviceIcon4,
    title: "Mobile App Development",
    description:
      "Tailored software solution crafted to fit your unique business needs.",
    bgColor: "rgba(255, 107, 107, 1)",
    bgShadow: "0px 13px 36.3px 0px rgba(255, 107, 107, 0.65)",
  },
  {
    icon: serviceIcon5,
    title: "Data Science & Analytics",
    description:
      "Tailored software solution crafted to fit your unique business needs.",
    bgColor: " rgba(179, 157, 219, 1)",
    bgShadow: "0px 13px 27.7px 0px rgba(179, 157, 219, 0.65)",
  },
  {
    icon: serviceIcon6,
    title: "Cloud Computing Services",
    description:
      "Tailored software solution crafted to fit your unique business needs.",
    bgColor: "rgba(0, 191, 255, 1)",
    bgShadow: "0px 13px 34.7px 0px rgba(0, 191, 255, 0.65)",
  },
  {
    icon: serviceIcon7,
    title: "Cyber Security Services",
    description:
      "Tailored software solution crafted to fit your unique business needs.",
    bgColor: "rgba(255, 215, 0, 1)",
    bgShadow: "0px 13px 36.3px 0px rgba(255, 215, 0, 0.65)",
  },
  {
    icon: serviceIcon8,
    title: "SAAS Development",
    description:
      "Tailored software solution crafted to fit your unique business needs.",
    bgColor: " rgba(102, 204, 204, 1)",
    bgShadow: " 0px 13px 27.7px 0px rgba(102, 204, 204, 0.65)",
  },
];

export default function Service() {
  return (
    <>
      <section className="service-otr pt-[90px] bg-primary relative border-t border-error-content">
        <div className="service-inr flex items-center flex-wrap justify-center gap-y-[67px] gap-x-[33px] px-39 max-desktop:px-10 max-tablet:px-5">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-box-otr min-w-[354px] max-tablet3:min-w-[330px] ${
                index >= 4 && "max-laptop:hidden" // Hide boxes 4 and above for screens ≤ 767px
              } ${
                index >= 6 && "max-desktop2:hidden" // Hide boxes 6 and above for screens between 768px and 1440px
              } ${
                index >= 8 && "min-desktop2:hidden" // Hide boxes 8 and above for screens > 1440px
              }`}
            >
              <div className="service-box-inr relative min-h-[228px] bg-accent pt-[62px] pb-[25px] text-center rounded-[40px] border border-[#FFFFFF91]">
                <div
                  className={`absolute top-[-38px] left-2/4 -translate-x-2/4 flex justify-center shadow-[0px_13px_36.3px_0px_rgba(127,_0,_255,_0.65)] items-center rounded-[38px] w-[77px] h-[77px]`}
                  style={{
                    backgroundColor: service.bgColor,
                    boxShadow: service.bgShadow,
                  }}
                >
                  <Image
                    className="serviceIcon w-[47px] h-[47px] "
                    src={service.icon}
                    alt={`${service.title} icon`}
                  />
                </div>
                <p className="service-box-heading w-[228px] text-[#FFFFFF] mx-auto font-questrial font-normal text-[25px] leading-[30px] pb-2.5 max-tablet3:text-[21px]">
                  {service.title}
                </p>
                <p className="service-box-desc w-[272px] text-center mx-auto text-[#E2E2E2FF] font-questrial font-normal text-[15px] max-tablet3:text-[14px]">
                  {service.description}
                </p>
                <div className="service-box-action-otr flex justify-center">
                  <a
                    href="#"
                    className="service-box-action cursor-pointer font-questrial font-normal text-[15px] text-[#ACACACFF] border-b border-[#FFFFFF91]"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="services-action-otr pt-10 flex justify-center">
          <a
            href="#"
            className="services-action-inr font-medium text-[15px] p-[9px] rounded-[22px] border border-error w-[178px] text-center"
          >
            Read More
          </a>
        </div>
      </section>
    </>
  );
}
