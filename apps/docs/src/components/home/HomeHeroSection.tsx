import Link from "@docusaurus/Link";
import IlFeature from "../../../static/img/il_feature.svg";

export default function HomeHeroSection() {
  return (
    <section className="flex flex-col space-y-8 px-4 md:px-8 md:flex-row md:space-x-8 xl:px-32">
      <div className="flex flex-col space-y-4 md:max-w-lg xl:max-w-2xl">
        <div className="flex flex-col">
          <h1 className="text-4xl font-black md:text-5xl xl:text-7xl">
            <span className="text-white/75">Create</span> ondemand&nbsp;
            <span className="text-white/75">Wallet</span> for your app
          </h1>
          <p>
            An sdk and api for creating ondemand custodian wallets for your web3
            application.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to="docs/intro"
            className="btn btn-primary px-4 py-2 rounded"
          >
            Get Started
          </Link>
          <Link
            to="https://github.com/saitamafun"
            target="_blank"
            className="btn btn-secondary px-4 py-2 rounded"
          >
            Contribute
          </Link>
        </div>
      </div>
      <div className="flex-1 flex">
        <IlFeature
          width={512}
          height={512}
          className="w-sm h-sm mx-auto md:w-sm md:h-sm"
        />
      </div>
    </section>
  );
}
