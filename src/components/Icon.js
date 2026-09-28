export default function Icon({ name, className = '', ...props }) {
  return <i className={[name, className].filter(Boolean).join(' ')} aria-hidden="true" {...props} />;
}
