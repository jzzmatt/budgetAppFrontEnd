"use client";

import { useSidebarLayout } from "@/components/layout/sidebar-layout-context";
import { useTranslations } from "@/lib/i18n/client";

type AppSidebarToggleProps = {
  variant: "collapse" | "expand";
};

export function AppSidebarToggle({ variant }: AppSidebarToggleProps) {
  const { toggleSidebar } = useSidebarLayout();
  const { t } = useTranslations();
  const label = variant === "collapse" ? t("nav.hideSidebar") : t("nav.showSidebar");

  return (
    <button
      aria-expanded={variant === "expand"}
      aria-label={label}
      className={`app-sidebar-toggle${variant === "expand" ? " app-header-sidebar-toggle" : ""}`}
      onClick={toggleSidebar}
      title={label}
      type="button"
    >
      {variant === "collapse" ? (
        <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 18 18" width="18">
          <path
            d="M6.75 4.5 3.75 9l3 4.5M3.75 9h10.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
      ) : (
        <svg aria-hidden="true" fill="none" height="18" viewBox="0 0 18 18" width="18">
          <path
            d="M3.75 4.5h10.5M3.75 9h10.5M3.75 13.5h10.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
        </svg>
      )}
    </button>
  );
}
