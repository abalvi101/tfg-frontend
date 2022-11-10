import axios from "axios"
import { useContext, useEffect } from "react"
import { useState } from "react"
import { ENDPOINTS } from "../../../consts/api"
import { AuthContext, login } from "../../../contexts/auth"
import { copyObject } from "../../../utils"
import Button from "../../common/button"
import Input from "../../common/input"
import { useAuth } from '../../../hooks'
import { useNavigate } from "react-router-dom"

export const Login = ({ className, }) => {

  const [user, dispatch] = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState([
    {
      value: '',
      label: 'Correo electrónico',
      key: 'email',
      type: 'email',
      rules: {
        required: true,
        email: true,
      },
      error: 'Direcciónd de correo electrónico no válida.'
    },
    {
      value: '',
      label: 'Contraseña',
      key: 'password',
      type: 'password',
      rules: {
        required: true,
        min: 6,
      },
      error: ''
    },
  ])

  const onSubmitLoginHandler = async (event, form) => {
    event.preventDefault();
    let data = {}
    form.map(
      (input) => {
        data[input.key] = input.value
      }
    )
    
    await axios.post(ENDPOINTS.USER.LOGIN, data)
    .then(({ data }) => {
      if (data.success) {
        console.log(data.data.token)
        dispatch(login(data.data));
        navigate('/dashboard/profile')
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const onChangeInputHandler = (event, index) => {
    let auxForm = copyObject(form);
    auxForm[index].value = event.target.value;
    setForm(auxForm);
  }

  return (
    <form
      className={className}
      onSubmit={(event) => onSubmitLoginHandler(event, form)}
    >
      <legend>
        <h1>Incio de sesión</h1>
      </legend>
      {
        form.map(
          (input, index) => (
            <Input {...input} onChange={(event) => onChangeInputHandler(event, index)} />
          )
        )
      }
      <Button
        onClick={(event) => onSubmitLoginHandler(event, form)}
      >
        Login
      </Button>
    </form>
  )
}