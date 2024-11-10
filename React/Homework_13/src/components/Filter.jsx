import { connect } from "react-redux";
import { setFilter } from "../redux/action";
import styles from "../styles/Filter.module.css";

function Filter({ filter, setFilter }) {
  function handleFilterChange(event) {
    setFilter(event.target.value);
  }

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        autoFocus
      />
    </div>
  );
}

const mapStateToProps = (state) => ({ filter: state.filter });

const mapDispatchToProps = { setFilter };

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
