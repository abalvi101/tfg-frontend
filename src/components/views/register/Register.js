import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { ENDPOINTS } from "../../../consts/api"
import { useAppState, useAuth } from "../../../hooks"
import { validateForm } from "../../../utils"
import copyObject from "../../../utils/copyObject"
import Button from "../../common/button"
import Input from "../../common/input"
import Switch from "../../common/switch"

export const Register = ({ className, }) => {

  const [user, userUpdate] = useAuth();
  const [appState, appStateUpdate] = useAppState();
  const navigate = useNavigate();
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [role, setRole] = useState('user');
  const [form, setForm] = useState({
    user: [
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
        label: 'Birthday',
        key: 'birthday',
        type: 'date',
        rules: {
          required: true,
          date: true,
        },
        error: '',
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
    ],
    association: [
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
      {
        value: null,
        label: 'Provincia',
        key: 'province_id',
        type: 'select',
        rules: {
          required: true,
        },
        error: '',
        options: [],
      },
      {
        value: null,
        label: 'Ciudad',
        key: 'city_id',
        type: 'select',
        rules: {
          required: true,
        },
        error: '',
        options: [],
      },
    ],
  })

  
  useEffect(() => {
    const getData = async () => {
      appStateUpdate.startLoading();
      await getProvinces();
      await getCities();
      appStateUpdate.finishLoading();
    }

    getData();
  }, [])

  useEffect(() => {
    if (provinces.length) {
      let auxForm = copyObject(form.association);
      let index = auxForm.findIndex(
        (input) => input.key === 'province_id'
      );
      if (index > -1) {
        auxForm[index].options = provinces.map(
          (province) => ({
            name: province.name,
            key: province.id,
            value: province.id,
          })
        )
        setForm({...form, association: auxForm});
      }
    }
  }, [provinces])

  useEffect(() => {
    if (cities.length) {
      let auxForm = copyObject(form.association);
      let index = auxForm.findIndex(
        (input) => input.key === 'city_id'
      );
      if (index > -1) {
        auxForm[index].options = cities.map(
          (city) => ({
            name: city.name,
            key: city.id,
            value: city.id,
          })
        )
        setForm({...form, association: auxForm});
      }
    }
  }, [cities])

  useEffect(() => {
    if (user.token)
      return navigate('/');
  }, [user])

  const getProvinces = async () => {
    await axios.get(ENDPOINTS.LOCATION.GET_PROVINCES)
    .then(({data}) => {
      setProvinces(data.data);
    })
    .catch((error) => {
      console.log('error', error);
    })
  }

  const getCities = async () => {
    await axios.get(ENDPOINTS.LOCATION.GET_CITIES)
    .then(({data}) => {
      setCities(data.data);
    })
    .catch((error) => {
      console.log('error', error);
    })
  }

  const setPartialForm = (newForm) => {
    const auxForm = copyObject(form);
    auxForm[role] = newForm;
    setForm(auxForm);
  }

  const onSubmitHandler = async (event, form) => {
    event.preventDefault();
    if (!validateForm(form, setPartialForm))
      return false;
    let data = {role}
    form.map(
      (input) => {
        data[input.key] = input.value
      }
    )
    
    await axios.post(ENDPOINTS.AUTH.REGISTER, data)
    .then(({ data }) => {
      if (data.success) {
        userUpdate.login(data.data);
        navigate('/dashboard/profile');
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const onChangeInputHandler = (value, index) => {
    let auxForm = copyObject(form);
    auxForm[role][index].value = value;
    auxForm[role][index].error = '';
    setForm(auxForm);
  }

  return (
    <form
      className={className}
      onSubmit={(event) => onSubmitHandler(event, form[role])}
      noValidate
    >
      <legend>
        <h1>Registro</h1>
      </legend>

      {
        form[role].map(
          (input, index) => (
            <Input
              {...input}
              onChange={(value) => onChangeInputHandler(value, index)}
            />
          )
        )
      }

      <footer>
        <label className="switch_label">
          <span className={role === 'association' ? null : 'nonSelected'}>Asociación</span>
          <Switch
            value={role}
            onChange={(value) => setRole(value)}
            on='user'
            off='association'
          />
          <span className={role === 'user' ? null : 'nonSelected'}>Usuario</span>
        </label>
        <Button
          secondary
          type="submit"
        >
          Confirmar
        </Button>
      </footer>
    </form>
  )
}