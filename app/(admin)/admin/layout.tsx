import React from "react";
import Link from "next/link";
const Management = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex h-screen bg-gradient-to-br from-green-300 to-white">
        <aside className="flex flex-col w-64 bg-amber-50 gap-4">
          <div>
            <Link href={"/"}>Index</Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link href={"/admin/users"}>Users</Link>
              </li>
              <li>
                <Link href={"/admin/projects"}>Projets</Link>
              </li>
              <li>
                <Link href={"/admin/cards"}>Cards</Link>
              </li>
            </ul>
          </nav>
          <div></div>
        </aside>
        <main className="p-4">{children}</main>
      </div>
    </>
  );
};

export default Management;
