import { useLocation } from "@docusaurus/router";

export default function useIsDocPage() {
  const { pathname } = useLocation();
  return /^\/docs\//i.test(pathname);
}
