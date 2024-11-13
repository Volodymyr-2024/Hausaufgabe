import React from "react";

const UserList = React.memo(function UserList({ users }) {
  console.log("UserList re-rendered");
  return (
    <div className="users_container">
      <h1>User List</h1>
      <ol>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
    </div>
  );
});

export default UserList;
