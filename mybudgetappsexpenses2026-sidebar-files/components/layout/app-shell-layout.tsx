"use client";

import { type ReactNode } from "react";
import { AppBottomNav } from "@/components/layout/app-bottom-nav";
import { AppMobileSignOut } from "@/components/layout/app-mobile-sign-out";
import { AppSidebarToggle } from "@/components/layout/app-sidebar-toggle";
import { LanguageSelector } from "@/components/i18n/language-selector";
import { SidebarLayoutProvider } from "@/components/layout/sidebar-layout-context";
import { useSidebarCollapsed } from "@/components/layout/use-sidebar-collapsed";

type AppShellLayoutProps = {
  skipToContentLabel: string;
  title: string;
  description?: string;
  actions?: ReactNode;
  clerkReady: boolean;
  sidebarTop: ReactNode;
  sidebarLocale: ReactNode;
  sidebarUser: ReactNode;
  children: ReactNode;
};

export function AppShellLayout({
  skipToContentLabel,
  title,
  description,
  actions,
  clerkReady,
  sidebarTop,
  sidebarLocale,
  sidebarUser,
  children,
}: AppShellLayoutProps) {
  const { collapsed, toggleSidebar } = useSidebarCollapsed();

  return (
    <SidebarLayoutProvider collapsed={collapsed} toggleSidebar={toggleSidebar}>
      <div className={`app-shell${collapsed ? " app-shell-sidebar-collapsed" : ""}`}>
        <a className="skip-link" href="#main-content">
          {skipToContentLabel}
        </a>
        <aside className="app-sidebar">
          <div className="app-sidebar-top">{sidebarTop}</div>
          <div className="app-sidebar-locale">{sidebarLocale}</div>
          {sidebarUser}
        </aside>
        <div className="app-main">
          <header className="app-header">
            <div className="app-header-leading">
              {collapsed ? <AppSidebarToggle variant="expand" /> : null}
              <div className="app-header-copy">
                <h1>{title}</h1>
                {description ? <p>{description}</p> : null}
              </div>
            </div>
            <div className="app-header-actions">
              <LanguageSelector />
              {actions}
              {clerkReady ? <AppMobileSignOut /> : null}
            </div>
          </header>
          <main className="app-content" id="main-content">
            {children}
          </main>
        </div>
        <AppBottomNav />
      </div>
    </SidebarLayoutProvider>
  );
}
