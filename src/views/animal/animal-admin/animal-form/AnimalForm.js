import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { ENDPOINTS } from "../../../../consts/api";
import { copyObject, validateForm } from "../../../../utils";
import Button from "../../../../components/common/button";
import Input from "../../../../components/common/input";
import { useAppState } from "../../../../hooks";

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
    label: 'Día de entrada',
    key: 'entry_date',
    type: 'date',
    rules: {
      required: true,
    },
    error: ''
  },
  {
    value: '',
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
    value: '',
    label: 'Ciudad',
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
  const [appState, appStateUpdate] = useAppState();
  const [filteredCities, setFilteredCities] = useState([]);
  const [filteredBreeds, setFilteredBreeds] = useState([]);

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
        auxForm[index].options.unshift(
          {
            key: null,
            value: null,
            name: 'Sin especificar',
          }
        )
        setForm(auxForm);
      }
    }
  }, [provinces])

  useEffect(() => {
    setFilteredCities(cities);
  }, [cities])

  useEffect(() => {
    let auxForm = copyObject(form);
    let index = auxForm.findIndex(
      (input) => input.key === 'city_id'
    );
    if (index > -1) {
      auxForm[index].options = filteredCities.map(
        (city) => ({
          name: city.name,
          key: city.id,
          value: city.id,
        })
      )
      auxForm[index].options.unshift(
        {
          key: null,
          value: null,
          name: 'Sin especificar',
        }
      )
      setForm(auxForm);
    }
  }, [filteredCities])

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
        auxForm[index].options.unshift(
          {
            key: null,
            value: null,
            name: 'Sin especificar',
          }
        )
        setForm(auxForm);
      }
    }
  }, [species])

  useEffect(() => {
    setFilteredBreeds(breeds);
  }, [breeds])

  useEffect(() => {
    let auxForm = copyObject(form);
    let index = auxForm.findIndex(
      (input) => input.key === 'breed_id'
    );
    if (index > -1) {
      auxForm[index].options = filteredBreeds.map(
        (breed) => ({
          name: breed.name,
          key: breed.id,
          value: breed.id,
        })
      )
      auxForm[index].options.unshift(
        {
          key: null,
          value: null,
          name: 'Sin especificar',
        }
      )
      setForm(auxForm);
    }
  }, [filteredBreeds])

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
    auxForm = updateForm(auxForm, value, index);
    setForm(auxForm);
  }

  const updateForm = (auxForm, value, index) => {
    if (auxForm[index].key === 'animal_specie_id') {
      if (!value) {
        setFilteredBreeds(breeds);
      } else {
        setFilteredBreeds(breeds.filter(
          (breed) => breed.animal_specie_id === value
        ))

        let breedIndex = auxForm.findIndex(
          (field) => field.key === 'breed_id'
        );
        if (breeds.find((breed) => breed.id === auxForm[breedIndex].value)?.animal_specie_id !== value)
          auxForm[breedIndex].value = null;
      }
    }
    
    if (auxForm[index].key === 'province_id') {
      if (!value) {
        setFilteredCities(cities);
      } else {
        setFilteredCities(cities.filter(
          (city) => city.province_id === value
        ))

        let cityIndex = auxForm.findIndex(
          (field) => field.key === 'city_id'
        );
        if (cities.find((city) => city.id === auxForm[cityIndex].value)?.province_id !== value)
          auxForm[cityIndex].value = null;
      }
    }

    return auxForm;
  }

  const onSubmitHandler = async (event, form) => {
    event.preventDefault();
    appStateUpdate.startLoading();
    if (!validateForm(form, setForm)) {
      appStateUpdate.finishLoading();
      return false;
    }
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
        appStateUpdate.newNotification({
          type: 'success',
          message: 'Datos actualizados.'
        })
      }
    })
    .catch((error) => {
      console.log(error);
      appStateUpdate.newNotification({
        type: 'error',
        message: 'Error al actualizar los datos.'
      })
    })
    .finally(() => appStateUpdate.finishLoading())
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
          form.slice(0, -1).map(
            (input, index) => (
              <Input
                {...input}
                onChange={(value) => onChangeInputHandler(value, index)}
              />
            )
          )
        }
        <div className='textarea'>
          <label>Descripción</label>
          <textarea
            rows={4}
            value={form[form.length - 1].value}
            onChange={(event) => onChangeInputHandler(event.target.value, form.length - 1)}
          />
        </div>
      </section>
        <Button
          primary
          type="submit"
          className="button"
        >
          Guardar
        </Button>
    </form>
  )
}