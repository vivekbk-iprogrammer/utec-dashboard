import { useState } from 'react';
import Icon from './Icon';

export default function QuickNavItem({ id, label, icon, placeholder, onOpen }) {
  const [value, setValue] = useState('');
  const inputId = `quick-link-${id}`;

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextValue = value.trim();

    if (!nextValue) {
      return;
    }

    onOpen?.(id, nextValue);
    setValue('');
  };

  return (
    <form className="quick-item" onSubmit={handleSubmit}>
      <label className="quick-label" htmlFor={inputId}>
        <Icon name={icon} />
        <strong>{label}</strong>
      </label>

      <div className="quick-input">
        <input
          id={inputId}
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
          placeholder={placeholder}
          autoComplete="off"
        />
        <button type="submit" disabled={!value.trim()}>
          Open
        </button>
      </div>
    </form>
  );
}
