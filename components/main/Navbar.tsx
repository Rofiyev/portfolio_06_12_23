import { Socials, navbarItems } from "@/constants";
import { INavbar, ISocials } from "@/interface";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a href="#about" className="h-auto w-auto flex flex-row items-center">
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />
          <span className="font-bold hidden md:block text-gray-300">
            Rofiyev Dilshod
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            {navbarItems.map(({ id, label, route }: INavbar) => (
              <a key={id} href={route} className="cursor-pointer">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map(({ name, src }: ISocials, i: number) => (
            <Image
              key={i}
              src={src}
              alt={name}
              width={24}
              height={24}
              className="cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
