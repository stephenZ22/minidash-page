// app/page.tsx
"use client";

// import { useState } from "react";

// async function createUser(formData) {
//   "use server"; // 这是 Server Action 的关键字
//   const email = formData.get("email");
//   const password = formData.get("password");
//   console.log("表单提交:", { email, password });
// }

export default function Page() {
  return (
    <form className="min-h-screen max-w-sm mx-auto mt-10 flex flex-col justify-center gap-4">
      <input type="email" name="email" placeholder="Email" className="border rounded p-2" />
      <input type="password" name="password" placeholder="Password" className="border rounded p-2" />
      <button type="submit" className="bg-green-500 text-white rounded border border-transparent p-2 hover:bg-green-600 hover:border-amber-600">
        提交
      </button>
    </form>
  );
}
