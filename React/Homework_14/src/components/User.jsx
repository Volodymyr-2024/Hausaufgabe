import { connect } from "react-redux";
import styles from "../styles/User.module.css";

function User({ name, status }) {
  return (
    <div className={styles.container}>
      <h2>User Information</h2>
      <p>Name: {name}</p>
      <p>Status: {status}</p>
    </div>
  );
}

const mapStateToProps = (state) => ({
  name: state.name,
  status: state.status,
});

export default connect(mapStateToProps)(User);
