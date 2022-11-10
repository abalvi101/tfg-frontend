import { useEffect } from "react"
import { useState } from "react"
import copyObject from "../../../utils/copyObject"
import Input from "../../common/input"

export const Register = ({ className, }) => {
  const [form, setForm] = useState([
    {
      value: '',
      label: 'Name',
      key: 'name',
      rules: {
        required: true,
      },
      error: ''
    },
    {
      value: '',
      label: 'Surname',
      key: 'surname',
      rules: {
        required: true,
      },
      error: ''
    },
    {
      value: '',
      label: 'Birthdate',
      key: 'birthdate',
      type: 'date',
      rules: {
        required: true,
        date: true
      },
      error: ''
    },
    {
      value: '',
      label: 'Email',
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
      label: 'Password',
      key: 'password',
      type: 'password',
      rules: {
        required: true,
        min: 6,
      },
      error: ''
    },
    {
      value: '',
      label: 'Confirm password',
      key: 'c_password',
      type: 'password',
      rules: {
        required: true,
        min: 6,
      },
      error: ''
    },
  ])

  useEffect(() => {
    console.log('CAMBIA EL FORM:', form)
  }, [form])

  const onChangeInputHandler = (event, index) => {
    console.log('CAMBIA INPUT', event.target.value);
    let auxForm = copyObject(form);
    auxForm[index].value = event.target.value;
    setForm(auxForm);
  }

  return (
    <form>
      <legend>
        Crear usuario
      </legend>
      {
        form.map(
          (input, index) => (
            <Input {...input} onChange={(event) => onChangeInputHandler(event, index)} />
          )
        )
      }
    </form>
  )
}