import React from 'react';

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
          style={{
            lineHeight: 'inherit',
            textAlign: 'inherit',
            padding: 0,
            margin: 0,
            border: 'none',
            fontFamily: 'inherit',
            fontSize: '1em',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
        />
      </div>
    </div>
  );
}
