import axios from "axios"

export const register = (responseHandler, name, surname, email, password, cPassword, birthname) => {
  axios.post(
    'register/user', 
    {
      name,
      surname,
      birthname,
      email,
      password,
      c_password: cPassword
    }
  )
  .then((response) => responseHandler(response))
  .catch((error) => errorHandler(error))
}