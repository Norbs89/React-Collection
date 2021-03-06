import React from "react";

const RadioGenerator = (props, header) => {
  const refObj = {};
  return (
    <div key={header} className="form-section">
      <h3 className="form-section-header">{header}</h3>
      <div className="radio-div">
        {props.drinks.map((drink) => {
          if (!refObj[drink[header]]) {
            refObj[drink[header]] = true;
            return (
              <label key={drink[header]} className="radios">
                <input
                  className="radio"
                  type="radio"
                  name={header}
                  value={drink[header]}
                  onChange={(event) => {
                    props.handleChange(header, event.target.value);
                  }}
                />
                {drink[header]}
              </label>
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default RadioGenerator;
