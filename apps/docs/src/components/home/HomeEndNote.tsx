import { MdTurnLeft, MdTurnRight } from "react-icons/md";
import IlSecure from "../../../static/img/il_secure.svg";

export default function HomeEndNote() {
  return (
    <section className="flex flex-col items-center justify-center px-4 md:px-8">
      <div className="flex flex-col space-y-16">
        <div className="flex flex-col space-y-4">
          <div className="mx-auto text-center lt-md:text-sm md:w-sm xl:w-lg">
            <h1 className="text-4xl font-black uppercase">
              Security at the core
            </h1>
            <p className="text-start text-white/75">
              Saitama has a secure layer with continous audits, fully open
              source and more.
            </p>
          </div>
          <div>
            <button className="flex items-center space-x-4">
              <MdTurnRight className="text-xl -rotate-x-180  " />
              <span>Learn more</span>
            </button>
          </div>
        </div>
        <div>
          <IlSecure
            width={512}
            height={512}
            className="mx-auto w-xs h-xs md:w-sm md:h-sm"
          />
        </div>
      </div>
    </section>
  );
}
