import { Socials, navbarItems } from "@/constants";
import { INavbar, ISocials } from "@/interface";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

const Navbar = (): JSX.Element => {
  return (
    <div className="h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 min-w-full px-2 sm:px-5 ">
      <div className="!max-w-7xl mx-auto h-full flex flex-row items-center justify-between">
        <a href="#about" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            loading="lazy"
            className="cursor-pointer hover:animate-slowspin hidden sm:inline-block"
          />
          <span className="font-bold hidden md:block text-gray-300">
            Rofiyev Dilshod
          </span>
          <span className="font-bold inline-block md:hidden text-gray-300">
            R.D.7
          </span>
        </a>

        <div className="!min-w-[250px] sm:w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-[10px] sm:px-[20px] py-[8px] sm:py-[10px] rounded-full text-gray-200">
            {navbarItems.map(({ id, label, route }: INavbar) => (
              <a key={id} href={route} className="cursor-pointer">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Image
            src="/author.jpg"
            alt="Author"
            width={50}
            height={50}
            loading="lazy"
            className="cursor-pointer rounded-full object-cover !h-[40px] !w-[40px]"
          />
          <div className="flex flex-row justify-center items-center mt-0 sm:mt-1">
            {Array.from({ length: 5 }).map((_, i: number) => (
              <FaStar key={i} className="text-yellow-500 text-[10px]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
