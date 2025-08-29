import React from "react";

import { SidebarProvider } from "@/components/ui/shadcn/sidebar";
import { AppSidebar } from "@/components/pages/admin/AdminSidebar";

const Management = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <AppSidebar />

        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
      </div>
    </SidebarProvider>
  );
};

export default Management;
