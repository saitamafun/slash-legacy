import clsx from "clsx";
import IlLogo from "../../static/img/logo.svg";
import Link from "@docusaurus/Link";

type LogoProps = {
  width?: number;
  height?: number;
  className?: string;
  iconClassName?: string
};

export default function Logo({
  width = 18,
  height = 18,
  className,
  iconClassName
}: LogoProps) {
  return (
    <Link
      to="/"
      className="flex items-center hover:opacity-50 cursor-pointer hover:text-white/75"
    >
      <IlLogo
        width={width}
        height={height}
        className={iconClassName}
      />
      <span className={clsx("text-xl font-roboto font-black hover:decoration-none", className)}>aitama</span>
    </Link>
  );
}
