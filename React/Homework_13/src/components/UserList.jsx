import UserItem from "./UserItem";
import { connect } from "react-redux";
import styles from "../styles/UserList.module.css";

function UserList({ users, filter }) {
  function filteredUsers(users, filter) {
    let filterTrim = filter.trim();
    return users.filter((user) => {
      if (user.length < filterTrim.length) {
        return false;
      }
      for (let i = 0; i < filterTrim.length; i++) {
        if (user[i].toLowerCase() !== filterTrim[i].toLowerCase()) {
          return false;
        }
      }
      return true;
    });
  }

  const filteredUserList = filteredUsers(users, filter);
  return (
    <div className={styles.container}>
      <ul>
        {filteredUserList.map((user, index) => (
          <UserItem key={index} user={user} />
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({
  users: state.users,
  filter: state.filter,
});

export default connect(mapStateToProps)(UserList);
