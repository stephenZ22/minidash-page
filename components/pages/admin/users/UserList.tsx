interface UserItem {
  id: number;
  name: string;
  email: string;
}
interface UserListProps {
  users: UserItem[];
}
const UserList = ({ users: UserListProps }) => {
  return <div>User List Component</div>;
};

export default UserList;
