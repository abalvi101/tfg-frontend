import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { ENDPOINTS } from "../../../../consts/api";
import { copyObject, validateForm } from "../../../../utils";
import Button from "../../../../components/common/button";
import Input from "../../../../components/common/input";
import { useAppState } from "../../../../hooks";
import Switch from "../../../../components/common/switch";

const defaultForm = [
  {
    value: '',
    label: '¿Es crónica?',
    key: 'chronic',
    type: 'radio',
    error: ''
  },
  {
    value: '',
    label: 'Descripción',
    key: 'description',
    type: 'textarea',
    rules: {
      required: true,
    },
    error: ''
  },
  {
    value: '',
    label: 'Tratamiento',
    key: 'treatment',
    rules: {
      required: true,
    },
    error: ''
  },
  {
    value: '',
    label: 'Enfermedad',
    key: 'name',
    rules: {
      required: true,
    },
    error: ''
  },
]

export default ({ className, animal, onSuccess }) => {
  const [form, setForm] = useState(defaultForm);
  const [appState, appStateUpdate] = useAppState();

  useEffect(() => {
    if (animal?.disease) {
      let auxForm = copyObject(form);
      Object.entries(animal.disease).map(
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

  const onChangeInputHandler = (value, index) => {
    let auxForm = copyObject(form);
    auxForm[index].value = value;
    auxForm[index].error = '';
    setForm(auxForm);
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
    
    await axios.post(ENDPOINTS.ANIMAL.STORE_DISEASE, {animal_id: animal.id, data: data})
    .then(({ data }) => {
      if (data.success) {
        onSuccess();
      }
    })
    .catch((error) => {
      console.log('Error al actualizar enfermedad', error);
    })
    .finally(() => appStateUpdate.finishLoading())
  }

  const onDeleteHandler = (e) => {
    e.preventDefault();
    appStateUpdate.startLoading();
    axios
      .post(ENDPOINTS.ANIMAL.DELETE_DISEASE, {animal_id: animal.id})
      .then(({ data }) => {
        if (data.success) {
          onSuccess();
        }
      })
      .catch((error) => {
        console.log('Error al eliminar enfermedad', error);
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
        <h4>Enfermedad</h4>
      </legend>

      <section className="form">
        {
          form.slice(3).map(
            (input, index) => (
              <Input
                {...input}
                onChange={(value) => onChangeInputHandler(value, index + 3)}
              />
            )
          )
        }
        <div className="switch">
          <label>¿Es crónico?</label>
          <div>
            <span>No</span>
            <Switch
              value={form[0].value}
              onChange={(checked) => onChangeInputHandler(checked, 0)}
              on={1}
              off={0}
            />
            <span>Sí</span>
          </div>
        </div>
        <div className='textarea'>
          <label>Tratamiento</label>
          <textarea
            rows={3}
            value={form[2].value}
            onChange={(event) => onChangeInputHandler(event.target.value, 2)}
          />
        </div>
        <div className='textarea'>
          <label>Descripción</label>
          <textarea
            rows={4}
            value={form[1].value}
            onChange={(event) => onChangeInputHandler(event.target.value, 1)}
          />
        </div>
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
          Guardar
        </Button>
      </section>
    </form>
  )
}