import React from "react";
import clsx from "clsx";

import type { Props } from "@theme/Layout";
import SkipToContent from "@theme/SkipToContent";
import LayoutProvider from "@theme/Layout/Provider";
import AnnouncementBar from "@theme/AnnouncementBar";
import ErrorPageContent from "@theme/ErrorPageContent";

import ErrorBoundary from "@docusaurus/ErrorBoundary";
import { useKeyboardNavigation } from "@docusaurus/theme-common/internal";
import {
  PageMetadata,
  SkipToContentFallbackId,
  ThemeClassNames,
} from "@docusaurus/theme-common";

import Footer from "./Footer";
import Header from "./Header";

import styles from "./styles.module.css";
import { useLocation } from "@docusaurus/router";

export default function Layout(props: Props): JSX.Element {
  const { children, noFooter, wrapperClassName, title, description } = props;

  const { pathname } = useLocation();

  useKeyboardNavigation();

  return (
    <LayoutProvider>
      <PageMetadata
        title={title}
        description={description}
      />
      <SkipToContent />
      <AnnouncementBar />
      <Header />
      <div
        id={SkipToContentFallbackId}
        className={clsx(
          ThemeClassNames.wrapper.main,
          styles.mainWrapper,
          wrapperClassName,
          "overflow-x-hidden overflow-y-scroll"
        )}
      >
        <ErrorBoundary fallback={(params) => <ErrorPageContent {...params} />}>
          {children}
        </ErrorBoundary>
      </div>
      {!noFooter && !pathname.includes("docs") && <Footer />}
    </LayoutProvider>
  );
}
