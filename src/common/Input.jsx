import React from "react";
import { InputText } from "primereact/inputtext";

const Input = (props) => {
  const { type, placeholder, value, onChange, label, htmlFor, id } = props;
  console.log("props>", props);
  return (
    <div>
      <label htmlFor={htmlFor}>{label}: </label>
      <InputText
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
