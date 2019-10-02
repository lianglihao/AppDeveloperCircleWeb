import React from 'react';

export default ({ title, id, isDone, onChange }) => {
  return (
    <h3>
      <input checked={isDone}
        onChange={onChange(id)}
        type="checkbox"
      />
      <span>{title}</span>
    </h3>
  )
}
