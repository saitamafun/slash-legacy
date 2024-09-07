import clsx from "clsx";
import { MdChevronRight } from "react-icons/md";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Translate from "@docusaurus/Translate";
import DocSidebar from "@theme/DocSidebar";

type DocHeaderProps = {
  className?: string;
};

export default function DocHeader({ className }: DocHeaderProps) {
  return (
    <>
      <div className={clsx(className, "flex p-2 border-y-2 border-black")}>
        <div className="flex-1">
          <button
            className="flex items-center space-x-2 p-2"
            onClick={() => {
              const sidebar = document.querySelector(
                ".theme-doc-sidebar-container"
              ) as HTMLElement;

              sidebar.style.display = "flex";
              console.log(sidebar.style.display)
            }}
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
    </>
  );
}
