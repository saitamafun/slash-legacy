import { MdLock, MdOutlineExtension, MdTurnRight } from "react-icons/md";
import { IconType } from "react-icons";

import IlSecure from "../../../static/img/il_secure.svg";
import IlIntegration from "../../../static/img/il_integration.svg";

type NoteProps = {
  tagline: string;
  icon: IconType;
  title: string;
  description: string;
  media: React.ReactNode;
};

const Note = ({ tagline, title, description, media, ...props }: NoteProps) => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col lt-md:space-y-16 md:flex-row xl:w-6xl xl:self-center">
        <div className="flex flex-col space-y-4 xl:max-w-sm">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              <props.icon />
              <span className="uppercase text-base">{tagline}</span>
            </div>
            <div className="mx-auto lt-md:text-sm">
              <h1 className="text-2xl font-mono font-black uppercase">{title}</h1>
              <p className="text-white/75">{description}</p>
            </div>
          </div>
          <div>
            <button className="flex items-center space-x-4">
              <MdTurnRight className="text-xl -rotate-x-180  " />
              <span>Learn more</span>
            </button>
          </div>
        </div>
        <div className="flex-1 flex items-end justify-end">{media}</div>
      </div>
    </div>
  );
};
export default function HomeNote() {
  return (
    <section className="flex flex-col px-4 lt-md:items-center lt-md:justify-center md:px-8">
      <Note
        tagline="Security"
        icon={MdLock}
        title="Security at the core"
        description="At Saitama, we prioritize your safety and peace of mind by integrating security into every layer of our platform. With a commitment to continuous audits, our system undergoes regular and thorough checks to identify and eliminate vulnerabilities."
        media={
          <IlSecure
            width={512}
            height={512}
            className="w-xs h-xs lt-md:mx-auto md:w-sm md:h-sm xl:w-auto xl:h-auto"
          />
        }
      />
      <Note
        tagline="Integration"
        icon={MdOutlineExtension}
        title="Integrate with your custom provider"
        description="Use any of our default authentication integrations, or ship your own with our SDK and API. Because a great authentication management system should work with everything you use on daily basis."
        media={
          <IlIntegration
            width={512}
            height={512}
            className="w-xs h-xs lt-md:mx-auto md:w-sm md:h-sm xl:w-auto xl:h-auto"
          />
        }
      />
    </section>
  );
}
