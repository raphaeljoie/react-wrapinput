import React from 'react';

import './WrapInput.scss';

export default function WrapInput({
  value, onChange, style, type,
}) {
  const elRef = React.useRef();

  return (
    <div
      style={{ ...style, cursor: 'text' }}
      onClick={() => elRef.current.focus()}
    >
      <div style={{ position: 'relative' }}>
        <span style={{ whiteSpace: 'nowrap' }}>
          {value || <>&nbsp;</>}
        </span>
        <input
          type={type}
          ref={elRef}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
}
