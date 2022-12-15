import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
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
        value: 1,
        name: 'Macho',
        key: 'male',
      },
      {
        value: 0,
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
        value: 1,
        name: 'Sí',
        key: true,
      },
      {
        value: 0,
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

export default ({ className, animal, onSuccess, provinces, cities, species, breeds, sizes }) => {
  const [form, setForm] = useState(defaultForm);

  useEffect(() => {
    if (animal) {
      let auxForm = copyObject(form);
      Object.entries(animal).map(
        ([key, value]) => {
          let index = form.findIndex(
            (field) => field.key === key
          )
          if (index > -1) {
            auxForm[index].value = value;
          }
        }
      )
      setForm(auxForm);
    }
  }, [animal])

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
    
    await axios.post(ENDPOINTS.ANIMAL.UPDATE, {id: animal.id, data: data})
    .then(({ data }) => {
      if (data.success) {
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
        <h4>Modificar datos del animal</h4>
      </legend>

      <section className="form">
        {
          form.map(
            (input, index) => (
              <Input
                {...input}
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
          Confirmar
        </Button>
    </form>
  )
}