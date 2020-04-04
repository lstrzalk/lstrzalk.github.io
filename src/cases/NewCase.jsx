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
  [SYMPTOMS.FEVER]: 'Gorączka',
  [SYMPTOMS.COUGH]: 'Kaszel',
  [SYMPTOMS.BREATHING_PROBLEM]: 'Duszności',
  [SYMPTOMS.COMING_FROM_ABROAD]: 'Powrót z zagranicy',
  [SYMPTOMS.CLOSE_CONTACT]: 'Bliski kontakt z osobą zakażoną'
}
export const NewCase = ({ open, handleClose }) => {
  const [values, setValues] = React.useState({
    id: '',
    symptoms: {
      [SYMPTOMS.FEVER]: false,
      [SYMPTOMS.COUGH]: false,
      [SYMPTOMS.BREATHING_PROBLEM]: false,
      [SYMPTOMS.COMING_FROM_ABROAD]: false,
      [SYMPTOMS.CLOSE_CONTACT]: false
    }
  })

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

  const updateId = (event) => {
    setValues({ ...values, id: event.target.value })
  }

  return (
    <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Dodaj nowy przypadek</DialogTitle>
      <DialogContent>

        <FormGroup column>

          <TextField
            label="id"
            variant="outlined"
            onChange={updateId}
          />
          {
            Object.keys(SYMPTOMS).map(symptomName =>
              <FormControlLabel
                key={symptomName}
                control={<Checkbox checked={values[symptomName]} onChange={updateSymptom(symptomName)} name={SYMPTOM_NAMES[symptomName]}/>}
                label={SYMPTOM_NAMES[symptomName]}
              />)
          }
        </FormGroup>


      </DialogContent>
      <DialogActions>

        <Button onClick={handleClose({ close: true })} color="secondary">
          Zamknij
        </Button>
        <Button onClick={handleClose({ close: true, values })} color="primary" disabled={!values.id}>
          Stwórz
        </Button>
      </DialogActions>
    </Dialog>
  )
}
