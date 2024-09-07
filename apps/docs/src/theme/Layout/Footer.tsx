import clsx from "clsx";
import Link from "@docusaurus/Link";

import { IconType } from "react-icons";
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";

import { PropsWithClassName } from "@site/src/global.t";
import Logo from "@site/src/components/Logo";

type Social = {
  name: string;
  icon: IconType;
  link: string;
};

const socials: Social[] = [
  {
    name: "Telegram",
    icon: FaTelegramPlane,
    link: "https://t.me/+f9wrf3C_FMw3Mjhh",
  },
  {
    name: "Twitter",
    icon: FaXTwitter,
    link: "https://x.com/saitamadotfun",
  },
  {
    name: "Twitter",
    icon: FaDiscord,
    link: "https://x.com/saitamadotfun",
  },
];

export default function Footer({ className }: PropsWithClassName) {
  return (
    <footer
      className={clsx(
        className,
        "flex lt-md:items-center p-4 md:px-8"
      )}
    >
      <div>
        <Logo
          width={16}
          height={16}
          className="text-sm"
        />
        <p className="lt-md:text-sm text-white/75">
          © {new Date().getFullYear()} Saitama. All Rights Reserved.
        </p>
      </div>
      <div className="flex-1 flex items-center space-x-2 justify-end">
        {socials.map((social, index) => (
          <Link
            key={index}
            to={social.link}
            target="_blank"
            className="p-2 bg-black/50 rounded-full hover:text-white/75 cursor-pointer"
          >
            <social.icon className="md:text-xl" />
          </Link>
        ))}
      </div>
    </footer>
  );
}
