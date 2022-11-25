import copyObject from "./copyObject";
import validateInput from "./validateInput";

const validateForm = (form, setForm) => {
  let valid = true;
  let auxForm = copyObject(form);

  const setError = (index, error) => {
    auxForm[index].error = error;
  }

  form.map(
    (input, index) => {
      if (!validateInput(input, (error) => setError(index, error)))
        valid = false;
    }
  )

  setForm(auxForm);
  return valid;
}

export default validateForm;