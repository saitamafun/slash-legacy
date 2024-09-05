import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import HomeFeature from "../components/home/HomeFeature";
import HomeHeroSection from "../components/home/HomeHeroSection";
import HomeEndNote from "../components/home/HomeEndNote";

export default function HomaPage() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={siteConfig.title}
      description=""
      wrapperClassName="flex flex-col space-y-16 pt-16"
    >
      <HomeHeroSection />
      <HomeFeature />
      <HomeEndNote />
    </Layout>
  );
}
