"use client";

import { useCallback, useSyncExternalStore } from "react";

const SIDEBAR_COLLAPSED_STORAGE_KEY = "my-expense-tracker-sidebar-collapsed";
const SIDEBAR_COLLAPSED_CHANGE_EVENT = "sidebar-collapsed-change";

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(SIDEBAR_COLLAPSED_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(SIDEBAR_COLLAPSED_CHANGE_EVENT, onStoreChange);
  };
}

function getSidebarCollapsedSnapshot() {
  try {
    return window.localStorage.getItem(SIDEBAR_COLLAPSED_STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function getSidebarCollapsedServerSnapshot() {
  return false;
}

function writeSidebarCollapsed(next: boolean) {
  try {
    window.localStorage.setItem(SIDEBAR_COLLAPSED_STORAGE_KEY, String(next));
  } catch {
    // Ignore storage failures (private mode, quota, etc.).
  }

  window.dispatchEvent(new Event(SIDEBAR_COLLAPSED_CHANGE_EVENT));
}

export function useSidebarCollapsed() {
  const collapsed = useSyncExternalStore(
    subscribe,
    getSidebarCollapsedSnapshot,
    getSidebarCollapsedServerSnapshot,
  );

  const toggleSidebar = useCallback(() => {
    writeSidebarCollapsed(!getSidebarCollapsedSnapshot());
  }, []);

  return { collapsed, toggleSidebar };
}
