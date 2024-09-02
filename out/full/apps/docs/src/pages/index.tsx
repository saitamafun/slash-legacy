import Layout from "@theme/Layout";
import CodeBlock from "@theme/CodeBlock";
import Image from "@theme/ThemedImage";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import IlBot from "../../static/img/il_bot.svg";

export default function HomaPage() {
  const { siteConfig } = useDocusaurusContext();
  const connectCode = [
    'import SaitamaWalletAdapter from "@saitama/fun/adapter";\n',
    "const adapter = new WalletAdapter({\n  accessToken: string,\n  rpcEndpoint: string \n});",
    "await adapter.sendTransaction(transaction: Transaction);",
  ];

  return (
    <Layout
      title={siteConfig.title}
      description=""
      wrapperClassName="flex flex-col p-4 space-y-16 font-sans md:p-16"
    >
      <div className="mx-auto max-w-sm flex flex-col space-y-4 text-center">
        <div className="flex flex-col">
          <h1 className="text-4xl font-black">
            <span className="text-violet-500">Create</span> ondemand&nbsp;
            <span className="text-violet-500">Wallet</span> for your app
          </h1>
          <p>
            An sdk and api for creating ondemand custodian wallets for your web3
            application.
          </p>
        </div>
        <div className="mx-auto flex items-center space-x-4">
          <button className="btn btn-primary px-4 py-2 rounded">
            Get Started
          </button>
          <button className="btn btn-secondary px-4 py-2 rounded">
            Contribute
          </button>
        </div>
      </div>
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <h4 className="text-xl font-bold">
              Seamless integration & connection
            </h4>
            <p className="text-sm text-white/75">
              Integrate wallet in few lines of codes, no complex configuration
              required.
            </p>
          </div>
          <CodeBlock
            language="ts"
            className="text-sm"
            showLineNumbers
          >
            {connectCode.join("\n")}
          </CodeBlock>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex flex-col">
            <h4 className="text-xl font-bold">SDK and API</h4>
            <p className="text-sm text-white/75">
              Create your own customized wallet with our readily available api
              and sdk that are well documented.
            </p>
          </div>
          <IlBot
            width={256}
            height={256}
            className="md:mx-auto"
          />
        </div>
      </div>
    </Layout>
  );
}
