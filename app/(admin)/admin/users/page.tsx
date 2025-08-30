import { cookies } from "next/headers";
import { DataTable } from "./data-table";
import { columns, UserItem } from "./columns";

const getUsers = async (): Promise<UserItem[]> => {
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
    cache: "no-store", //确保每次请求最新数据，不用缓存
  });

  const json = await res.json();
  return json.data;
};
const Users = async () => {
  const users = await getUsers();
  console.log("users:", users);
  return (
    <div className="flex h-full bg-white/60 flex-col p-4 gap-2">
      <h1 className="text-lg font-bold mb-2">Users</h1>
      <DataTable columns={columns} data={users} />
    </div>
  );
};

export default Users;
