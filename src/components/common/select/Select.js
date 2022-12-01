import { useEffect, useRef, useState } from "react";

export const Select = ({ className, label, value, options, onChange, error }) => {

  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);

  useEffect(() => {
  }, [])

  useEffect(() => {
    filterOptions();
  }, [options])

  useEffect(() => {
    let selectedOption = options?.find((option) => option.value === value)?.name;
    if (selectedOption)
      setSearch(selectedOption);
  }, [value, options])

  useEffect(() => {
    filterOptions();
  }, [search])

  const filterOptions = () => {
    let auxFilteredOptions = options?.filter(
      (option) => option.name.toLowerCase().includes(search.toLowerCase())
    )
    setFilteredOptions(auxFilteredOptions);
  }

  const onFocus = () => {
    setIsFocused(true);
  }

  const onBlur = () => {
    setIsFocused(false);
  }

  return (
    <div className={className}>
      <input
        className={`input ${isFocused ? 'focused' : null}`}
        ref={inputRef}
        value={search}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(event) => setSearch(event.target.value)}
        placeholder={label}
      />
      {
        error
          ? <span className="error">{error}</span>
          : null
      }
      <div className={`options_container ${isFocused ? 'focused' : null}`}>
        <ul className="options">
          {
            filteredOptions?.map(
              (option) => (
                <li
                  className={`option ${value === option.value ? 'selected' : null}`}
                  key={option.key}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => {
                    onChange(option.value);
                    setSearch('');
                    inputRef.current.blur();
                  }}
                >
                  {option.name}
                </li>
              )
            )
          }
        </ul>
      </div>
    </div>
  )
}