import React from "react";
import Link from "next/link";
import {
  HomeIcon,
  UsersIcon,
  AlignCenterHorizontal,
  ListCheckIcon,
} from "lucide-react";

const Management = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen bg-custom">
      {/* Sidebar */}
      <aside className="flex flex-col w-64 bg-white shadow-xl m-4">
        {/* 顶部 Logo */}
        <Link
          href="/admin"
          className="flex items-center gap-3 px-6 py-6 border-b hover:bg-emerald-50 transition"
        >
          <HomeIcon className="w-7 h-7 text-emerald-600" />
          <span className="text-lg font-semibold text-gray-800 tracking-tight">
            Admin Panel
          </span>
        </Link>

        {/* 导航菜单 */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            <li>
              <Link
                href="/admin/users"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-emerald-100 hover:text-emerald-700 transition-all duration-300"
              >
                <UsersIcon className="w-5 h-5" />
                <span className="font-medium">Users</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/projects"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-emerald-100 hover:text-emerald-700 transition-all duration-300"
              >
                <AlignCenterHorizontal className="w-5 h-5" />
                <span className="font-medium">Projects</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/cards"
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-emerald-100 hover:text-emerald-700 transition-all duration-300"
              >
                <ListCheckIcon className="w-5 h-5" />
                <span className="font-medium">Cards</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* 底部版权/登出 */}
        <div className="px-6 py-4 text-xs text-gray-400 border-t">
          © 2025 MiniDash
        </div>
      </aside>

      {/* 主内容区 */}
      <main className="flex-1 p-8 overflow-y-auto">{children}</main>
    </div>
  );
};

export default Management;
