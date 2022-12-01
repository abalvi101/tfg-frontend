import { useRef } from "react"
import Select from "../select/Select.styled";

export const Input = ({ className, label, error, type, onChange = () => {}, ...props }) => {
  const inputRef = useRef(null);

  const getType = (type) => {
    if (!type || type === "date" || type === "select")
      return 'text'
    return type
  }

  const onFocus = () => {
    if (type === 'date') {
      inputRef.current.type = 'date'
    }
  }

  const onBlur = () => {
    if (type === 'date') {
      inputRef.current.type = 'text'
    }
  }
  if (type === 'select')
    return (
      <Select label={label} error={error} onChange={onChange} {...props}/>
    )
  return (
    <section className={className}>
      <div>
        <input
          type={getType(type)}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={(event) => onChange(event.target.value)}
          {...props}
          ref={inputRef}
        />
        <div className="focus" />
        {
          error
            ? <span className="chapuza"><span>{label}</span></span>
            : null
        }
        <label onClick={() => inputRef.current.focus()}>{label}</label>
      </div>
      {
        error
          ? <span className="error">{error}</span>
          : null
      }
    </section>
  )
}