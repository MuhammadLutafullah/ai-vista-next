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
  },
  {
    icon: serviceIcon2,
    title: "Web Development Services",
    description:
      "Tailored software solution crafted to fit your unique business needs.",
  },
  {
    icon: serviceIcon3,
    title: "UI/UX Design Services",
    description:
      "Tailored software solution crafted to fit your unique business needs.",
  },
  {
    icon: serviceIcon4,
    title: "Mobile App Development",
    description:
      "Tailored software solution crafted to fit your unique business needs.",
  },
  {
    icon: serviceIcon5,
    title: "Data Science & Analytics",
    description:
      "Tailored software solution crafted to fit your unique business needs.",
  },
  {
    icon: serviceIcon6,
    title: "Cloud Computing Services",
    description:
      "Tailored software solution crafted to fit your unique business needs.",
  },
  {
    icon: serviceIcon7,
    title: "Cyber Security Services",
    description:
      "Tailored software solution crafted to fit your unique business needs.",
  },
  {
    icon: serviceIcon8,
    title: "SAAS Development",
    description:
      "Tailored software solution crafted to fit your unique business needs.",
  },
];

export default function Service() {
  return (
    <>
      <div className="service-otr pt-[90px] bg-primary relative border-t border-error-content">
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
                <Image
                  className="serviceIcon absolute top-[-59px] left-2/4 -translate-x-2/4"
                  src={service.icon}
                  alt={`${service.title} icon`}
                />
                <p className="service-box-heading w-[228px] text-[#FFFFFF] mx-auto font-questrial font-normal text-[25px] leading-[30px] pb-2.5 max-tablet3:text-[21px]">
                  {service.title}
                </p>
                <p className="service-box-desc w-[272px] text-center mx-auto text-[#E2E2E2FF] font-questrial font-normal text-[15px] max-tablet3:text-[14px]">
                  {service.description}
                </p>
                <div className="service-box-action-otr flex justify-center">
                  <div className="service-box-action cursor-pointer font-questrial font-normal text-[15px] text-[#ACACACFF] border-b border-[#FFFFFF91]">
                    Read More
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="services-action-otr pt-10 flex justify-center">
          <div className="services-action-inr font-medium text-[15px] p-[9px] rounded-[22px] border border-error w-[178px] text-center">
            Read More
          </div>
        </div>
      </div>
    </>
  );
}
