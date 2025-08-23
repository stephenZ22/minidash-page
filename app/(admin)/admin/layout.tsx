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
    <div className="flex h-screen bg-gradient-to-br from-green-300 to-white">
      {/* Sidebar */}
      <aside className="flex flex-col w-64 bg-white shadow-lg border-r">
        {/* 顶部 Logo/标题 */}
        <div className="flex items-center gap-2 px-6 py-4 border-b">
          <Link
            href="/admin"
            className="flex items-center gap-2 px-6 py-4 border-b hover:bg-emerald-50 transition"
          >
            <HomeIcon className="w-6 h-6 text-emerald-600" />
            <span className="text-xl font-bold text-gray-700">Admin Panel</span>
          </Link>
        </div>

        {/* 导航菜单 */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            <li>
              <Link
                href="/admin/users"
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition"
              >
                <UsersIcon className="w-5 h-5" />
                <span>Users</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/projects"
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition"
              >
                <AlignCenterHorizontal className="w-5 h-5" />
                <span>Projects</span>
              </Link>
            </li>
            <li>
              <Link
                href="/admin/cards"
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition"
              >
                <ListCheckIcon className="w-5 h-5" />
                <span>Cards</span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* 底部占位，可以放登出按钮 */}
        <div className="px-6 py-4 border-t text-sm text-gray-500">
          © 2025 MiniDash
        </div>
      </aside>

      {/* 主内容区 */}
      <main className="flex-1 p-6 overflow-y-auto">{children}</main>
    </div>
  );
};

export default Management;
