import Link from "@docusaurus/Link";
import { useHistory, useLocation } from "@docusaurus/router";
import clsx from "clsx";

type Navigation = {
  name: string;
  path: string;
};

const navigations: Navigation[] = [
  {
    name: "Docs",
    path: "/",
  },
  {
    name: "Blog",
    path: "/#blog",
  },
  {
    name: "Showcase",
    path: "/#showcase",
  },
  {
    name: "Community",
    path: "/#community",
  },
];

type NavBarProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function NavBar({ open, setOpen }: NavBarProps) {
  const { pathname } = useLocation();

  return (
    <nav
      className={clsx(
        "absolute inset-x-0 bg-black/75 backdrop-blur-sm p-4 flex flex-col text-sm lt-md:rounded-md md:static md:flex-row md:items-center md:justify-center md:bg-transparent md:p-0",
        open
          ? "lt-md:animate-fade-in lt-md:animate-duration-150"
          : "lt-md:hidden"
      )}
    >
      {navigations.map((navigation, index) => {
        const active = pathname === navigation.path;

        return (
          <Link
            key={index}
            to={navigation.path}
            className={clsx(
              "p-2 hover:text-white",
              active ? "text-white" : "text-white/75"
            )}
          >
            {navigation.name}
          </Link>
        );
      })}
    </nav>
  );
}
