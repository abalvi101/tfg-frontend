import { useRef } from "react"

export const Input = ({ className, label, error, ...props }) => {
  const inputRef = useRef(null);

  return (
    <section className={className}>
      <div>
        <input {...props} ref={inputRef}/>
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