import React from 'react';

const Errors = ({ errors }) => {
  if (errors) {
    let i = 0;
    return (
      <ul className="error-list" >
        {errors.map(err => (
          <li key={i++} className="form-error">{err}</li>
        ))}
      </ul>
    );
  } else {
    return (
      <div style={{ display: 'none' }}></div>
    );
  }
};

export default Errors;