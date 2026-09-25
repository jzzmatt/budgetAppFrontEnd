import type { ReactNode } from "react";
import { LanguageSelector } from "@/components/i18n/language-selector";
import { AppShellLayout } from "@/components/layout/app-shell-layout";
import { AppSidebarNav } from "@/components/layout/app-sidebar-nav";
import { AppSidebarToggle } from "@/components/layout/app-sidebar-toggle";
import { AppSidebarUser } from "@/components/layout/app-sidebar-user";
import { isClerkConfigured } from "@/lib/clerk/config";
import { getTranslations } from "@/lib/i18n/server";

type AppShellProps = {
  title: string;
  description?: string;
  actions?: ReactNode;
  children: ReactNode;
};

export async function AppShell({ title, description, actions, children }: AppShellProps) {
  const { t } = await getTranslations();
  const clerkReady = isClerkConfigured();

  return (
    <AppShellLayout
      actions={actions}
      clerkReady={clerkReady}
      description={description}
      sidebarLocale={<LanguageSelector />}
      sidebarTop={
        <>
          <div className="app-sidebar-brand-row">
            <p className="app-sidebar-brand">{t("app.name")}</p>
            <AppSidebarToggle variant="collapse" />
          </div>
          <AppSidebarNav />
        </>
      }
      sidebarUser={<AppSidebarUser />}
      skipToContentLabel={t("app.skipToContent")}
      title={title}
    >
      {children}
    </AppShellLayout>
  );
}
