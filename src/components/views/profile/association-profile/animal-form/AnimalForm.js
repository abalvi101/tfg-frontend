import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ENDPOINTS } from "../../../../../consts/api";
import { copyObject, validateForm } from "../../../../../utils";
import Button from "../../../../common/button";
import Input from "../../../../common/input";

const defaultForm = [
  {
    value: '',
    label: 'Nombre',
    key: 'name',
    rules: {
      required: true,
    },
    error: ''
  },
  {
    value: moment().format('YYYY-MM-DD'),
    label: 'Día de nacimiento',
    key: 'birthday',
    type: 'date',
    rules: {
      required: true,
    },
    error: ''
  },
  {
    value: moment().format('YYYY-MM-DD'),
    label: 'Día de entrada a la asociación',
    key: 'entry_date',
    type: 'date',
    rules: {
      required: true,
    },
    error: ''
  },
  {
    value: '',
    label: 'Provincia donde se encuentra',
    key: 'province_id',
    type: 'select',
    rules: {
      required: true,
    },
    error: '',
    options: [],
  },
  {
    value: '',
    label: 'Ciudad donde se encuentra',
    key: 'city_id',
    type: 'select',
    rules: {
      required: true,
    },
    error: '',
    options: [],
  },
  {
    value: '',
    label: 'Tipo de animal',
    key: 'animal_specie_id',
    type: 'select',
    rules: {
      required: true,
    },
    error: '',
    options: [],
  },
  {
    value: '',
    label: 'Raza',
    key: 'breed_id',
    type: 'select',
    rules: {
      required: true,
    },
    error: '',
    options: [],
  },
  {
    value: '',
    label: 'Tamaño',
    key: 'size_id',
    type: 'select',
    rules: {
      required: true,
    },
    error: '',
    options: [],
  },
  {
    value: '',
    label: 'Género',
    key: 'gender',
    type: 'select',
    error: '',
    options: [
      {
        value: true,
        name: 'Macho',
        key: 'male',
      },
      {
        value: false,
        name: 'Hembra',
        key: 'female',
      }
    ],
  },
  {
    value: '',
    label: 'Esterilizado',
    key: 'neutered',
    type: 'select',
    error: '',
    options: [
      {
        value: true,
        name: 'Sí',
        key: true,
      },
      {
        value: false,
        name: 'No',
        key: false,
      }
    ],
  },
  {
    value: '',
    label: 'Peso',
    key: 'weight',
    type: 'number',
    error: '',
  },
  {
    value: '',
    label: 'Color',
    key: 'color',
    error: '',
  },
  {
    value: '',
    label: 'Descripción',
    key: 'description',
    type: 'textarea',
    error: '',
  },
]

export default ({ className, onSuccess }) => {
  const navigate = useNavigate();
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [species, setSpecies] = useState([]);
  const [breeds, setBreeds] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [form, setForm] = useState(defaultForm);

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

    axios.get(ENDPOINTS.ANIMAL.GET_SPECIES)
    .then(({data}) => {
      setSpecies(data.data);
    })
    .catch((error) => {
      console.log('error', error);
    })

    axios.get(ENDPOINTS.ANIMAL.GET_BREEDS)
    .then(({data}) => {
      setBreeds(data.data);
    })
    .catch((error) => {
      console.log('error', error);
    })

    axios.get(ENDPOINTS.ANIMAL.GET_SIZES)
    .then(({data}) => {
      setSizes(data.data);
    })
    .catch((error) => {
      console.log('error', error);
    })
  }, [])

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

  useEffect(() => {
    if (species.length) {
      let auxForm = copyObject(form);
      let index = auxForm.findIndex(
        (input) => input.key === 'animal_specie_id'
      );
      if (index > -1) {
        auxForm[index].options = species.map(
          (specie) => ({
            name: specie.name,
            key: specie.id,
            value: specie.id,
          })
        )
        setForm(auxForm);
      }
    }
  }, [species])

  useEffect(() => {
    if (breeds.length) {
      let auxForm = copyObject(form);
      let index = auxForm.findIndex(
        (input) => input.key === 'breed_id'
      );
      if (index > -1) {
        auxForm[index].options = breeds.map(
          (breed) => ({
            name: breed.name,
            key: breed.id,
            value: breed.id,
          })
        )
        setForm(auxForm);
      }
    }
  }, [breeds])

  useEffect(() => {
    if (sizes.length) {
      let auxForm = copyObject(form);
      let index = auxForm.findIndex(
        (input) => input.key === 'size_id'
      );
      if (index > -1) {
        auxForm[index].options = sizes.map(
          (size) => ({
            name: `${size.code} - ${size.name}`,
            key: size.id,
            value: size.id,
          })
        )
        setForm(auxForm);
      }
    }
  }, [sizes])

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
    
    await axios.post(ENDPOINTS.ANIMAL.CREATE, data)
    .then(({ data }) => {
      if (data.success) {
        setForm(defaultForm);
        onSuccess();
      }
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <form
      className={className}
      onSubmit={(event) => onSubmitHandler(event, form)}
      noValidate
    >
      <legend>
        <h4>Añadir animal en adopción</h4>
      </legend>

      <section className="form">
        {
          form.map(
            (input, index) => (
              <Input
                {...input}
                className={input.key === 'description' ? 'description-input' : null}
                onChange={(value) => onChangeInputHandler(value, index)}
              />
            )
          )
        }
      </section>

      <Button
        primary
        type="submit"
        className="button"
      >
        Añadir
      </Button>
    </form>
  )
}