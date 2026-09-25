"use client";

import { createContext, useContext, type ReactNode } from "react";

type SidebarLayoutContextValue = {
  collapsed: boolean;
  toggleSidebar: () => void;
};

const SidebarLayoutContext = createContext<SidebarLayoutContextValue | null>(null);

export function SidebarLayoutProvider({
  collapsed,
  toggleSidebar,
  children,
}: SidebarLayoutContextValue & { children: ReactNode }) {
  return (
    <SidebarLayoutContext.Provider value={{ collapsed, toggleSidebar }}>
      {children}
    </SidebarLayoutContext.Provider>
  );
}

export function useSidebarLayout() {
  const context = useContext(SidebarLayoutContext);

  if (!context) {
    throw new Error("useSidebarLayout must be used within SidebarLayoutProvider");
  }

  return context;
}
