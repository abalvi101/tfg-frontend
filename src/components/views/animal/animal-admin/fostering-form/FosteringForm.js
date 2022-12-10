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
    label: 'Persona a cargo',
    key: 'person_in_charge',
    rules: {
      required: true,
    },
    error: ''
  },
  {
    value: '',
    label: 'Número de teléfono',
    key: 'phone_number',
    rules: {
      required: true,
    },
    error: ''
  },
  {
    value: '',
    label: 'Dirección',
    key: 'address',
    rules: {
      required: true,
    },
    error: ''
  },
  {
    value: '',
    label: 'Observaciones',
    key: 'observations',
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
    error: '',
    options: [],
  },
]

export default ({ className, animal, onSuccess, provinces, cities }) => {
  const [form, setForm] = useState(defaultForm);

  useEffect(() => {
    if (animal?.fostering) {
      let auxForm = copyObject(form);
      Object.entries(animal.fostering).map(
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
    } else {
      setForm(defaultForm);
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
    
    await axios.post(ENDPOINTS.ANIMAL.STORE_FOSTERING, {animal_id: animal.id, data: data})
    .then(({ data }) => {
      if (data.success) {
        onSuccess();
      }
    })
    .catch((error) => {
      console.log('Error al actualizar acogida', error);
    })
  }

  const onDeleteHandler = (e) => {
    e.preventDefault();
    axios
      .post(ENDPOINTS.ANIMAL.DELETE_FOSTERING, {animal_id: animal.id})
      .then(({ data }) => {
        if (data.success) {
          onSuccess();
        }
      })
      .catch((error) => {
        console.log('Error al eliminar acogida', error);
      })
  }

  return (
    <form
      className={className}
      onSubmit={(event) => onSubmitHandler(event, form)}
      noValidate
    >
      <legend>
        <h4>Casa de acogida</h4>
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
      <section className="buttons">
        {
          animal.fostering &&
          <Button
            danger
            onClick={onDeleteHandler}
            className="button"
          >
            Eliminar
          </Button>
        }
        <Button
          primary
          type="submit"
          className="button"
        >
          Confirmar
        </Button>
      </section>
    </form>
  )
}