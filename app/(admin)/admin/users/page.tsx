import { cookies } from "next/headers";

interface UserItem {
  id: number;
  name: string;
  email: string;
}

const Users = async () => {
  // 取 cookie
  const cookieStore = await cookies();
  const jwt_token = cookieStore.get("jwt_token")?.value;
  // 调接口
  const res = await fetch("http://127.0.0.1:3001/users", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${jwt_token}`,
      "Content-Type": "application/json",
    },
    cache: "no-store", // 🚨 确保每次请求最新数据，不用缓存
  });

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  const data = await res.json();
  const users: UserItem[] = data.data; // 假设后端返回 { data: [...] }

  return (
    <div className="flex h-full bg-white/60 flex-col p-4 gap-2">
      <h1 className="text-lg font-bold mb-2">Users</h1>
      {users.map((user) => (
        <div key={user.id} className="p-2 bg-white rounded shadow">
          <h2 className="font-medium">{user.name}</h2>
          <p className="text-sm text-gray-600">{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Users;
