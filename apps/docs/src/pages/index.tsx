import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import HomeFeature from "../components/home/HomeFeature";
import HomeHeroSection from "../components/home/HomeHeroSection";
import HomeNote from "../components/home/HomeNote";

export default function HomaPage() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description=""
      wrapperClassName="flex flex-col lt-md:py-16"
    >
      <main className="flex flex-col lt-md:space-y-32 xl:max-w-7xl xl:self-center">
        <HomeHeroSection />
        <HomeFeature />
        <HomeNote />
      </main>
    </Layout>
  );
}
