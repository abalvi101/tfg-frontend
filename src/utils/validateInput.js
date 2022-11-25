import moment from "moment/moment";
import validateEmail from "./validateEmail";

const PRIORITY = {
  MIN: 1,
  MAX: 1,
  DATE: 2,
  EMAIL: 2,
  REQUIRED: 3,
};

const validateInput = (input, setError) => {
  let priority = 0
  let error = '';
  if (!input.rules) return true;
  Object.keys(input.rules).map(
    (rule) => {
      switch (rule) {
        case 'min':
          if (input.value.length < input.rules.min && priority < PRIORITY.MIN) {
            error = `Debe tener al menos ${input.rules.min} caracteres.`;
            priority = PRIORITY.MIN;
          }
          break;
        case 'max':
          if (input.value.length > input.rules.max && priority < PRIORITY.MAX) {
            error = `No debe tener más de ${input.rules.max} caracteres.`;
            priority = PRIORITY.MAX;
          }
          break;
        case 'email':
          if (!validateEmail(input.value) && priority < PRIORITY.EMAIL) {
            error = `Dirección de correo electrónico no válida.`;
            priority = PRIORITY.EMAIL;
          }
          break;
        case 'date':
          if (!moment(input.value, 'YYYY-MM-DD', true).isValid() && priority < PRIORITY.DATE) {
            error = `${input.label} inválida.`;
            priority = PRIORITY.DATE;
          }
          break;
        case 'required':
          if (!input.value && priority < PRIORITY.REQUIRED) {
            error = `Este campo es obligatorio.`;
            priority = PRIORITY.REQUIRED;
          }
          break;
        default: 
          break;
      }
    }
  )
  setError(error);
  return !error;
}

export default validateInput;