import Code from "../ Code";
import IlBot from "../../../static/img/il_sdk.svg";

type FeatureBlockProps = {
  title: string;
  description: string;
  media: React.ReactNode;
};

const connectCode = [
  'import SaitamaWalletAdapter from "@saitama/fun/adapter";\n',
  "const adapter = new WalletAdapter({\n  accessToken: string,\n  rpcEndpoint: string \n});",
  "await adapter.sendTransaction(transaction: Transaction);",
];

const FeatureBlock = ({ title, description, media }: FeatureBlockProps) => (
  <div className="lt-md:w-full h-md flex flex-col space-y-4 bg-black/40 px-4 rounded-xl md:px-8 md:flex-1 md:w-1/2">
    <div className="flex flex-col pt-8">
      <h4 className="text-xl font-mono font-extrabold uppercase">{title}</h4>
      <p className="text-sm text-white/75 max-w-md">{description}</p>
    </div>
    <div className="flex-1 flex flex-col justify-end">{media}</div>
  </div>
);

export default function HomeFeature() {
  return (
    <section className="h-screen flex flex-col items-center  px-4 md:flex-row lt-md:space-y-8 md:space-x-4 md:px-8 xl:w-full">
      <FeatureBlock
        title="Connection"
        description="Integrate wallet in few lines of
        codes, no complex configuration required."
        media={
          <Code
            children={connectCode}
            className="rounded-t-xl  xl:w-3/4 xl:mx-auto"
          />
        }
      />

      <FeatureBlock
        title="SDK"
        description="Create your own customized wallet with our readily available api
              and sdk that are well documented."
        media={
          <IlBot
            width={256}
            height={256}
            className="mx-auto"
          />
        }
      />
    </section>
  );
}
