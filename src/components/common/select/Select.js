import { useEffect, useState } from "react";

export const Select = ({ className, label, value, options, onChange, error }) => {

  const [isFocused, setIsFocused] = useState(false);
  const [search, setSearch] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);

  useEffect(() => {
    console.log('USEEFFECT DEL SELECT')
    onChange(1);
  }, [])

  useEffect(() => {
    filterOptions();
    console.log('cambia opt');
  }, [options])

  useEffect(() => {
    console.log('BUSCANDO SELECTED', value, options);
    let selectedOption = options?.find((option) => option.value === value)?.name;
    if (selectedOption)
      setSearch(selectedOption);
      console.log('SELECTED', selectedOption);
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
                  onClick={() => {console.log('EJECUTANDO ONCHANGE', option.value)}}
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