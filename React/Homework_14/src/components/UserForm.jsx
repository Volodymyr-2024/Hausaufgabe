import { useState } from "react";
import { connect } from "react-redux";
import { setUserInfo } from "../redux/action";
import styles from "../styles/UserForm.module.css";

function UserForm({ name, status, setUserInfo }) {
  const [inputName, setInputName] = useState(name);
  const [inputStatus, setInputStatus] = useState(status);
  const [error, setError] = useState({ errorName: "", errorStatus: "" });

  function handleChange(e) {
    if (e.target.name === "name") {
      setInputName(e.target.value);
    } else if (e.target.name === "status") {
      setInputStatus(e.target.value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (inputName.trim() === "") {
      return setError({ errorName: "Name is required!!!" });
    }
    if (/[0-9]/.test(inputName)) {
      return setError({ errorName: "Name contains a Number!!!" });
    }
    if (inputStatus !== "online" && inputStatus !== "offline") {
      return setError({
        errorStatus: 'Status should be "online" or "offline"',
      });
    }
    setUserInfo(inputName, inputStatus);
    setError({ errorName: "", errorStatus: "" });
    // setInputName("");
    // setInputStatus("");
  }

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <h2>Edit user information</h2>
      <div className={styles.first_input_container}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={inputName}
          onChange={handleChange}
        />
        {error.errorName && <p style={{ color: "red" }}>{error.errorName}</p>}
      </div>
      <div className={styles.second_input_container}>
        <label>Status:</label>
        <input
          type="text"
          name="status"
          value={inputStatus}
          onChange={handleChange}
        />
        {error.errorStatus && (
          <p style={{ color: "red" }}>{error.errorStatus}</p>
        )}
      </div>
      <button type="submit">Save</button>
    </form>
  );
}
const mapStateToProps = (state) => ({
  name: state.name,
  status: state.status,
});
const mapDispatchToProps = { setUserInfo };

export default connect(mapStateToProps, mapDispatchToProps)(UserForm);
