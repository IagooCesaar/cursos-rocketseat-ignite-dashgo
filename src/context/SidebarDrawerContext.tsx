import { createContext, ReactNode } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

const SidebarDrawerContext = createContext();

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {
  return (
    <SidebarDrawerContext.Provider value={ }>
      {children}
    </SidebarDrawerContext.Provider>
  )
}