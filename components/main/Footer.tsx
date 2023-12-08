import { RxGithubLogo, RxInstagramLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaYoutube, FaTelegram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

const Footer = (): JSX.Element => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] relative z-[21] max-w-7xl mx-auto">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-start justify-start ml-5 sm:justify-around flex-wrap mb-14 gap-10">
          <div className="min-w-[200px] h-auto flex gap-3 flex-col items-start justify-start">
            <div className="font-bold text-[16px]">Community</div>
            <Link
              target="_blank"
              href="https://www.youtube.com/channel/UCc-K-kgMt6tdiSi_L9hgzgA"
            >
              <p className="flex flex-row items-center mt-[10px] cursor-pointer">
                <FaYoutube />
                <span className="text-[15px] ml-[6px]">Youtube</span>
              </p>
            </Link>
            <Link target="_blank" href="https://github.com/Rofiyev">
              <p className="flex flex-row items-center cursor-pointer">
                <RxGithubLogo />
                <span className="text-[15px] ml-[6px]">Github</span>
              </p>
            </Link>
            <Link target="_blank" href="https://web.telegram.org/k/">
              <p className="flex flex-row items-center cursor-pointer">
                <FaTelegram />
                <span className="text-[15px] ml-[6px]">Telegram</span>
              </p>
            </Link>
          </div>

          <div className="min-w-[200px] h-auto flex gap-3 flex-col items-start justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            <Link target="_blank" href="https://www.instagram.com/rof1yev/">
              <p className="flex flex-row items-center mt-[10px] cursor-pointer">
                <RxInstagramLogo />
                <span className="text-[15px] ml-[6px]">Instagram</span>
              </p>
            </Link>

            <Link target="_blank" href="https://twitter.com/Rof1yev">
              <p className="flex flex-row items-center cursor-pointer">
                <FaXTwitter />
                <span className="text-[15px] ml-[6px]">Twitter</span>
              </p>
            </Link>

            <Link
              target="_blank"
              href="https://www.linkedin.com/in/rofiyev-dilshod-25635a270/"
            >
              <p className="flex flex-row items-center cursor-pointer">
                <RxLinkedinLogo />
                <span className="text-[15px] ml-[6px]">Linkedin</span>
              </p>
            </Link>
          </div>

          <div className="min-w-[200px] h-auto flex gap-3 flex-col items-start justify-start">
            <div className="font-bold text-[16px]">Contact</div>
            <Link href="mailto:rofiyevdilshod@gmail.com">
              <p className="flex flex-row items-center mt-[10px] cursor-pointer">
                <MdEmail />
                <span className="text-[15px] ml-[6px]">
                  rofiyevdilshod@gmail.com
                </span>
              </p>
            </Link>
          </div>
        </div>

        <div className="mb-[20px] text-[15px] text-center">
          &copy;Rof1yev {new Date().getFullYear()} Portfolio. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
