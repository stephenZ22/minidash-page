import React from "react";

import { SidebarProvider } from "@/components/ui/shadcn/sidebar";
import { AppSidebar } from "@/components/pages/admin/AdminSidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode_toggle";

const Management = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="flex h-screen w-full">
          <AppSidebar />
          <ModeToggle />
          <main className="flex-1 p-8 overflow-y-auto">{children}</main>
        </div>
      </ThemeProvider>
    </SidebarProvider>
  );
};

export default Management;
