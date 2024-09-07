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
    <header
      className={clsx(className, "flex flex-col justify-center  lt-md:pt-14", {
        "md:bg-dark": isDocPage,
      })}
    >
      <div className="flex items-center pl-4  lt-md:fixed lt-md:top-0 lt-md:inset-x-0 lt-md:bg-[var(--ifm-background-color)] md:py-4">
        <Logo
          className="md:text-2xl"
          iconClassName="lt-md:w-6 lt-md:h-6"
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
