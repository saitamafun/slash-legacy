import clsx from "clsx";
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import Logo from "@site/src/components/Logo";
import { PropsWithClassName } from "@site/src/global.t";

import NavBar from "./NavBar";

export default function Header({ className }: PropsWithClassName) {
  const [open, setOpen] = useState(false);

  return (
    <header className={clsx(className, "flex items-center pl-4 md:pl-8")}>
      <Logo className="!text-3xl" />
      <div className="flex-1 relative">
        <NavBar
          open={open}
          setOpen={setOpen}
        />
      </div>
      <div>
        <button
          className="p-4 md:hidden"
          onClick={() => setOpen(!open)}
        >
          <HiOutlineMenuAlt3 className="text-xl md:text-2xl" />
        </button>
      </div>
    </header>
  );
}
