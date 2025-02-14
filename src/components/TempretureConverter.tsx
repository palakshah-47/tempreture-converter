import { ChangeEvent, SyntheticEvent, useState } from "react";
export const TempretureConverter = () => {
  const [celcius, setCelcius] = useState<string | number>("");
  const [fahrenheit, setFahrenheit] = useState<string | number>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "celcius") {
      setCelcius(value);
      const newValue = (Number(value) * 9) / 5 + 32;
      setFahrenheit(
        newValue.toString().length > 5 ? newValue.toFixed(4) : newValue
      );
    }
    if (name === "fahrenheit") {
      setFahrenheit(value);
      const newValue = ((Number(value) - 32) * 5) / 9;
      setCelcius(
        newValue.toString().length > 5 ? newValue.toFixed(4) : newValue
      );
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <label htmlFor="celcius">
        <input
          type="number"
          value={celcius}
          name="celcius"
          style={{ textAlign: "center" }}
          onChange={handleChange}
        />
        <div>Celcius</div>
      </label>
      <span style={{ marginTop: "-20px" }}>=</span>
      <label htmlFor="fahrenheit">
        <input
          type="number"
          value={fahrenheit}
          name="fahrenheit"
          onChange={handleChange}
          style={{ textAlign: "center" }}
        />
        <div>Fahrenheit</div>
      </label>
    </div>
  );
};
