import styles from "./DynamicFom.module.css";
import { useForm } from "react-hook-form";

export default function DynamicForm() {
  const { register, handleSubmit, watch } = useForm();
  function onSubmit(data) {
    console.log(data);
  }

  const firstFieldValue = watch("firstField");
  const showSecondField = firstFieldValue !== ""

  return (
    <form className={styles.form} style={{borderTop: showSecondField ? "3px solid black" : "1px solid black"}} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.inputContainer}>
        <label htmlFor="firstField">First Field</label>
        <input
          type="text"
          id="firstField"
          {...register("firstField", { required: true })}
        />
      </div>
      {firstFieldValue && (
        <div className={styles.inputContainer}>
          <label htmlFor="secondField">Second Field</label>
          <input
            type="text"
            id="secondField"
            {...register("secondField", { required: true })}
          />
        </div>
      )}
      <button type="submit">Отправить</button>
    </form>
  );
}
