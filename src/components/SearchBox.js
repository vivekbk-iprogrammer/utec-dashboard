import { useMemo } from 'react';
import Icon from './Icon';

export default function SearchBox({ value, onChange, inputRef }) {
  const shortcut = useMemo(() => {
    if (typeof navigator === 'undefined') {
      return 'Ctrl + K';
    }

    return /Mac|iPhone|iPad/.test(navigator.platform) ? '⌘ K' : 'Ctrl + K';
  }, []);

  return (
    <label className="search-box">
      <Icon name="fa-solid fa-magnifying-glass" />
      <input
        ref={inputRef}
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search project, repository, or tool..."
        aria-label="Search project, repository, or tool"
      />
      <kbd>{shortcut}</kbd>
    </label>
  );
}
