import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { ENDPOINTS } from "../../../consts/api"
import { copyObject, validateForm } from "../../../utils"
import Button from "../../common/button"
import Input from "../../common/input"
import { useAuth } from '../../../hooks'
import { Link, useNavigate } from "react-router-dom"
import Switch from "../../common/switch"

export const Login = ({ className, }) => {

  const [user, userUpdate] = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState([
    {
      value: 'user',
      label: 'Tipo de cuenta',
      key: 'role',
      type: 'text',
      rules: {
        required: true,
      },
      error: ''
    },
    {
      value: '',
      label: 'Correo electrónico',
      key: 'email',
      type: 'email',
      rules: {
        required: true,
        email: true,
      },
      error: ''
    },
    {
      value: '',
      label: 'Contraseña',
      key: 'password',
      type: 'password',
      rules: {
        required: true,
        min: 4,
      },
      error: ''
    },
  ])

  useEffect(() => {
    if (user.token)
      return navigate('/');
  }, [user])

  const onSubmitHandler = async (event, form) => {
    event.preventDefault();
    if (!validateForm(form, setForm))
      return false;
    let data = {}
    form.map(
      (input) => {
        data[input.key] = input.value
      }
    )
    
    await axios.post(ENDPOINTS.AUTH.LOGIN, data)
    .then(({ data }) => {
      if (data.success) {
        userUpdate.login(data.data);
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const onChangeInputHandler = (value, index) => {
    let auxForm = copyObject(form);
    auxForm[index].value = value;
    auxForm[index].error = '';
    setForm(auxForm);
  }

  return (
    <form
      className={className}
      onSubmit={(event) => onSubmitHandler(event, form)}
      noValidate
    >
      <legend>
        <h1>Inicio de sesión</h1>
      </legend>

      {
        form.slice(1).map(
          (input, index) => (
            <Input {...input} onChange={(value) => onChangeInputHandler(value, index + 1)} />
          )
        )
      }
      
      <label className="switch_label">
        <span className={form[0].value === 'association' ? null : 'nonSelected'}>Asociación</span>
        <Switch
          value={form[0].value}
          onChange={(checked) => onChangeInputHandler(checked, 0)}
          on='user'
          off='association'
        />
        <span className={form[0].value === 'user' ? null : 'nonSelected'}>Usuario</span>
      </label>

      <footer>
        <Link to="/registro">
          ¿No tienes cuenta? Regístrate aquí.
        </Link>
        <Button
          secondary
          type="submit"
        >
          Siguiente
        </Button>
      </footer>
    </form>
  )
}