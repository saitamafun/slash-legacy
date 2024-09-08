import clsx from "clsx";
import { MdChevronRight } from "react-icons/md";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Translate from "@docusaurus/Translate";

import { useNavbarMobileSidebar } from "@docusaurus/theme-common/internal";
import SecondaryMenu from "@theme/Navbar/MobileSidebar/SecondaryMenu";

type DocHeaderProps = {
  className?: string;
};

export default function DocHeader({ className }: DocHeaderProps) {
  const mobileSidebar = useNavbarMobileSidebar();

  return (
    <>
      <div className={clsx(className, "flex p-2 border-y-2 border-black")}>
        <div className="flex-1">
          <button
            className="flex items-center space-x-2 p-2"
            onClick={() => mobileSidebar.toggle()}
          >
            <HiOutlineMenuAlt2 />
            <span className="text-sm">Menu</span>
          </button>
        </div>
        <div>
          <button className="flex items-center space-x-2 p-2">
            <span className="flex-1 text-sm">
              <Translate
                id="theme.TOCCollapsible.toggleButtonLabel"
                description="The label used by the button on the collapsible TOC component"
              >
                On this page
              </Translate>
            </span>
            <MdChevronRight />
          </button>
        </div>
      </div>
      {mobileSidebar.shown && (
        <div className="absolute inset-x-0 inset-t-28  bg-black/50 backdrop-blur-xl p-4 z-100 md:hidden">
          <SecondaryMenu />
        </div>
      )}
    </>
  );
}
