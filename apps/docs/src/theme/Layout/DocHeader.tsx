import clsx from "clsx";
import { MdChevronRight } from "react-icons/md";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Translate from "@docusaurus/Translate";

type DocHeaderProps = {
  className?: string;
};

export default function DocHeader({ className }: DocHeaderProps) {
  return (
    <div className={clsx(className, "flex py-2 border-y-3 border-black")}>
      <div className="flex-1">
        <button className="flex items-center space-x-2 p-2">
          <HiOutlineMenuAlt2 />
          <span>Menu</span>
        </button>
      </div>
      <div>
        <button className="flex items-center space-x-2 p-2">
          <span className="flex-1">
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
  );
}
