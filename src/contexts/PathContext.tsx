import { createContext, useContext, type ReactNode } from "react";

const PathContext = createContext<string>("/");

export const PathProvider = ({
  path,
  children,
}: {
  path: string;
  children: ReactNode;
}) => <PathContext.Provider value={path}>{children}</PathContext.Provider>;

/** Drop-in replacement for `useLocation().pathname` from TanStack Router. */
export const useCurrentPath = () => useContext(PathContext);
