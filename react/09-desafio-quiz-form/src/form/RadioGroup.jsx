import React from "react";

const RadioGroup = ({ options, state, setState }) => {
  return (
    <>
      {options.map((option) => (
        <label
          key={option}
          style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center'
          }}
        >
          <input
          style={{
            width: 'unset'
          }}
            type="radio"
            value={option}
            checked={state == option}
            onChange={() => setState(option)}
          />
          {option}
        </label>
      ))}
    </>
  );
};

export default RadioGroup;
