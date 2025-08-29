// components/app-sidebar.tsx
"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/shadcn/sidebar";

import Link from "next/link";
import { Home, Users, Settings } from "lucide-react";
import Cookies from "js-cookie";

export function AppSidebar() {
  const current_user = Cookies.get("current_user");
  const userObj = JSON.parse(current_user || "{}");

  return (
    <Sidebar className="w-64 h-full border-r bg-white/50 backdrop-blur-lg">
      <SidebarContent>
        {/* 分组：主导航 */}
        <SidebarGroup>
          <SidebarGroupLabel>Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/admin">
                    <Home className="mr-2 h-4 w-4" />
                    Home
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/admin/users">
                    <Users className="mr-2 h-4 w-4" />
                    Users
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/admin/projects">
                    <Settings className="mr-2 h-4 w-4" />
                    Projects
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link href="/admin/cards">
                    <Settings className="mr-2 h-4 w-4" />
                    Cards
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        {/* todo fix this footer */}
        <div className="p-4 border-t">
          {userObj.name ? (
            <div className="text-sm">
              Signed in as <span className="font-medium">{userObj.name}</span>
            </div>
          ) : (
            <Link
              href="/login"
              className="flex items-center text-sm font-medium text-blue-600 hover:underline"
            >
              <Users className="mr-2 h-4 w-4" />
              Sign In
            </Link>
          )}
        </div>
      </SidebarFooter>
      <SidebarFooter>
        <div className="p-4 text-sm text-gray-500">© 2024 Mini Dash</div>
      </SidebarFooter>
    </Sidebar>
  );
}
