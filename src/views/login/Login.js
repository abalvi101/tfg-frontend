// login-background.jpg
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { ENDPOINTS } from "../../consts/api";
import { copyObject, validateForm } from "../../utils";
import Button from "../../components/common/button";
import Input from "../../components/common/input";
import { useAppState, useAuth } from '../../hooks';
import { Link, useNavigate } from "react-router-dom";
import Switch from "../../components/common/switch";

export const Login = ({ className, }) => {

  const [appState, appStateUpdate] = useAppState();
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
    appStateUpdate.startLoading();
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
        appStateUpdate.newNotification({
          type: 'success',
          message: 'Sesión iniciada.'
        })
      }
    })
    .catch((error) => {
      console.log(error);
      appStateUpdate.newNotification({
        type: 'error',
        message: 'Error al iniciar sesión.'
      })
    })
    .finally(() => appStateUpdate.finishLoading())
  }

  const onChangeInputHandler = (value, index) => {
    let auxForm = copyObject(form);
    auxForm[index].value = value;
    auxForm[index].error = '';
    setForm(auxForm);
  }

  return (
    <div className={className}>
      {/* <img src="/images/login-background.jpg" alt="background" /> */}
      <span id="login-background"/>
      <section id='login-form'>
        <form
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
          
          <label className="switch-label">
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
              Inciar sesión
            </Button>
          </footer>
        </form>
      </section>
    </div>
  )
}