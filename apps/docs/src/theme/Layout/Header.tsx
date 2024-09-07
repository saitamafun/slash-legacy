import clsx from "clsx";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import SearchBar from "@theme/SearchBar";

import Logo from "@site/src/components/Logo";
import { PropsWithClassName } from "@site/src/global.t";

import NavBar from "./NavBar";
import DocHeader from "./DocHeader";
import useIsDocPage from "@site/src/composables/useIsDocPage";

export default function Header({ className }: PropsWithClassName) {
  const [open, setOpen] = useState(false);
  const isDocPage = useIsDocPage();

  return (
    <header className={clsx(className, "flex flex-col justify-center md:bg-dark pl-4 md:px-8")}>
      <div className="static top-0 flex items-center md:py-4">
        <Logo
          className="md:text-2xl"
          iconClassName="lt-md:w-4 lt-md:h-4"
        />
        <div className="flex-1 relative">
          <NavBar
            open={open}
            setOpen={setOpen}
          />
        </div>
        <div className="flex items-center justify-center">
          <SearchBar />
          <button
            className="p-4 md:hidden"
            onClick={() => setOpen(!open)}
          >
            <HiOutlineMenuAlt3 className="text-xl md:text-2xl" />
          </button>
        </div>
      </div>
      {isDocPage && <DocHeader className="md:hidden" />}
    </header>
  );
}
