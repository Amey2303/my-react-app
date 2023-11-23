import React from 'react';

function Textbox(props) {
  return (
    <div className="textfields">
      <label>{props.label}
        <input
          type={props.type}
          id={props.id}
          autoComplete={props.autocomplete}
          onChange={props.onChange}
          value={props.value}
        />
      </label>
    </div>
  );
}

export default Textbox;
