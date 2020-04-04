import React from 'react'
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import DialogContent from '@material-ui/core/DialogContent'
import DialogActions from '@material-ui/core/DialogActions'
import Button from '@material-ui/core/Button'
import { SYMPTOMS } from '../data'
import FormGroup from '@material-ui/core/FormGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import TextField from '@material-ui/core/TextField'

const SYMPTOM_NAMES = {
  [SYMPTOMS.FEVER]: 'Fever',
  [SYMPTOMS.COUGH]: 'Cough',
  [SYMPTOMS.BREATHING_PROBLEM]: 'Difficulty with breathing',
  [SYMPTOMS.COMING_FROM_ABROAD]: 'Return from Abroad',
  [SYMPTOMS.CLOSE_CONTACT]: 'Close contact with infected person'
}

const initialState = {
  id: '',
  symptoms: {
    [SYMPTOMS.FEVER]: false,
    [SYMPTOMS.COUGH]: false,
    [SYMPTOMS.BREATHING_PROBLEM]: false,
    [SYMPTOMS.COMING_FROM_ABROAD]: false,
    [SYMPTOMS.CLOSE_CONTACT]: false
  },
  createNext: false
}
export const NewCase = ({ open, handleClose, ids }) => {
  const [values, setValues] = React.useState(initialState)

  const updateSymptom = symptom => () => {
    setValues({
      ...values,
      symptoms:
        {
          ...values.symptoms,
          [symptom]: !values.symptoms[symptom]
        }
    })
  }

  const updateCreateNext = () => {
    setValues({
      ...values,
      createNext: !values.createNext
    })
  }

  const updateId = (event) => {
    setValues({ ...values, id: event.target.value })
  }

  const clearValues = (createNext) => {
    setValues({ ...initialState, createNext })
  }

  const createNewCase = () => {
    if (!values.createNext) {
      handleClose({ close: true, values: { id: values.id, symptoms: values.symptoms } })
      clearValues(false)
    } else {
      handleClose({ close: false, values: { id: values.id, symptoms: values.symptoms } })
      clearValues(true)
    }
  }

  const closeDialog = () => {
    handleClose({ close: true })
  }

  const validateId = () => values.id && ids.includes(values.id)

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Craete new case</DialogTitle>
      <DialogContent>

        <FormGroup column>

          <TextField
            label="id"
            variant="outlined"
            onChange={updateId}
            value={values.id}
            required={true}
            error={validateId()}
            helperText={validateId() ? "Provided id already exists" : " "}
          />
          {
            Object.keys(SYMPTOMS).map(symptomName =>
              <FormControlLabel
                key={symptomName}
                control={<Checkbox checked={values.symptoms[symptomName]} onChange={updateSymptom(symptomName)} name={SYMPTOM_NAMES[symptomName]}/>}
                label={SYMPTOM_NAMES[symptomName]}
              />)
          }
        </FormGroup>


      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialog} color="secondary">
          Close
        </Button>
        <FormControlLabel
          control={<Checkbox checked={values.createNext} onChange={updateCreateNext} color={'secondary'}/>}
          label="Create next case"
        />
        <Button onClick={createNewCase} color="primary" disabled={!values.id || validateId()}>
          Create
        </Button>
      </DialogActions>
    </Dialog>
  )
}
