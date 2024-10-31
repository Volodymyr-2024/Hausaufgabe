import { useEffect, useRef } from "react";

export default function ValueDisplay({ value }) {
  const prevValue = useRef("");

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <div className="value_container">
      <p>Текущее значение: {value}</p>
      <p>предыдущее значение: {prevValue.current}</p>
    </div>
  );
}
