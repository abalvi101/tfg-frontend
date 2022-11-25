export const Switch = ({
  className,
  on,
  off,
  value,
  onChange,
  name,
  disabled,
  ...props
}) => {
  const checked = value === on;

  function handleClick() {
    if (onChange) {
      onChange(checked ? off : on);
    }
  }

  return (
    <div
      {...props}
      className={className}
      onClick={disabled ? null : handleClick}
    >
      <input type="hidden" name={name} value={value} />
      <span className={`track ${checked && 'trackChecked'}`} />
      <span className={`button ${checked && 'buttonChecked'}`} />
    </div>
  );
};

Switch.defaultProps = {
  value: 1,
  on: 1,
  off: 0,
  disabled: false,
};