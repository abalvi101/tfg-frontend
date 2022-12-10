import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ENDPOINTS } from "../../../../consts/api"
import { copyObject, validateForm } from "../../../../utils"
import AnimalCard from "../../../common/animal-card"
import Button from "../../../common/button"
import Input from "../../../common/input"

export default ({ className, user, refresh }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState([
    {
      label: 'Nombre',
      key: 'name',
      value: '',
      rules: {
        required: true,
      },
      error: '',
    },
    {
      label: 'Apellidos',
      key: 'surname',
      value: '',
      rules: {
        required: true,
      },
      error: '',
    },
    {
      value: '',
      label: 'Género',
      key: 'gender',
      type: 'select',
      error: '',
      options: [
        {
          value: 1,
          name: 'Masculino',
          key: 'male',
        },
        {
          value: 0,
          name: 'Femenino',
          key: 'female',
        }
      ],
    },
    {
      value: '',
      label: 'Provincia',
      key: 'province_id',
      type: 'select',
      error: '',
      options: [],
    },
    {
      value: '',
      label: 'Ciudad',
      key: 'city_id',
      type: 'select',
      error: '',
      options: [],
    },
    {
      label: 'Día de nacimiento',
      key: 'birthday',
      value: null,
      type: 'date',
      rules: {
        required: true,
      },
      error: '',
    },
  ])
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    axios.get(ENDPOINTS.LOCATION.GET_PROVINCES)
    .then(({data}) => {
      setProvinces(data.data);
    })
    .catch((error) => {
      console.log('error', error);
    })

    axios.get(ENDPOINTS.LOCATION.GET_CITIES)
    .then(({data}) => {
      setCities(data.data);
    })
    .catch((error) => {
      console.log('error', error);
    })
  }, [])

  useEffect(() => {
    if (user)
      Object.entries(user).map(
        ([key, value]) => {
          let index = form.findIndex(
            (field) => field.key === key
          )
          if (index > -1) {
            form[index].value = value;
          }
        }
      )
  }, [user])

  useEffect(() => {
    if (provinces.length) {
      let auxForm = copyObject(form);
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
        setForm(auxForm);
      }
    }
  }, [provinces])

  useEffect(() => {
    if (cities.length) {
      let auxForm = copyObject(form);
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
        setForm(auxForm);
      }
    }
  }, [cities])

  const onChangeInputHandler = (value, index) => {
    let auxForm = copyObject(form);
    auxForm[index].value = value;
    auxForm[index].error = '';
    setForm(auxForm);
  }

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
    
    await axios.post(ENDPOINTS.AUTH.UPDATE, data)
    .then(({ data }) => {
      if (data.success) {
        refresh();
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const onLike = (event, id) => {
    event.stopPropagation();
    axios
      .post(ENDPOINTS.AUTH.FAVOURITE, {animal_id: id})
      .then(({data}) => {
        if (data.success) {
          refresh();
        } else {
          console.log('Error en al añadir/quitar favorito');
        }
      })
      .catch((error) => console.log('Error en al añadir/quitar favorito', error))
  } 

  return (
    <div className={className}>
      <form
        className='form_wrapper'
        onSubmit={(event) => onSubmitHandler(event, form)}
        noValidate
      >
        <legend>
          <h4>Datos</h4>
        </legend>

        <section className="form">
          {
            form.map(
              (input, index) => (
                <Input
                  {...input}
                  className={'input'}
                  onChange={(value) => onChangeInputHandler(value, index)}
                />
              )
            )
          }
          <Button
            primary
            type="submit"
            className="button"
          >
            Actualizar
          </Button>
        </section>

      </form>
      <section className="favourite_animals">
        <h4>Animales favoritos</h4>
        <div className="list_animal">
          {
            user.favourites?.map(
              (animal) => (
                <AnimalCard
                  animal={animal}
                  key={animal.id}
                  onClick={() => navigate(`/animal/${animal.id}`)}
                  onLike={(event) => onLike(event, animal.id)}
                />
              )
            )
          }
        </div>
      </section>
    </div>
  )
}