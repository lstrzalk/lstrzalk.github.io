import React from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { SYMPTOMS } from '../data'
import { CheckCircleOutline, HighlightOff } from '@material-ui/icons'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import { NewCase } from './NewCase'
import Button from '@material-ui/core/Button'

const symptomOccurred = occurred => occurred ?
  <CheckCircleOutline style={{ color: green[500] }}/> : <HighlightOff style={{ color: red[500] }}/>

export const Cases = ({ cases, addCase, calculateBuckets }) => {
  const [values, setValues] = React.useState({ newCaseModal: false })

  const openModal = () => {
    setValues({ newCaseModal: true })
  }

  const closeModal = ({ close, values }) => {
    setValues({ newCaseModal: !close })
    if (values) {
      addCase({ id: values.id, symptoms: Object.keys(values.symptoms).filter(key => values.symptoms[key]) })
    }
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell align="right">Fever</TableCell>
              <TableCell align="right">Cough</TableCell>
              <TableCell align="right">Difficulty with breathing</TableCell>
              <TableCell align="right">Close contact with infected person</TableCell>
              <TableCell align="right">Return from Abroad</TableCell>
              <TableCell align="right">Probability</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cases.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{symptomOccurred(row.symptoms.includes(SYMPTOMS.FEVER))}</TableCell>
                <TableCell align="right">{symptomOccurred(row.symptoms.includes(SYMPTOMS.COUGH))}</TableCell>
                <TableCell align="right">{symptomOccurred(row.symptoms.includes(SYMPTOMS.BREATHING_PROBLEM))}</TableCell>
                <TableCell align="right">{symptomOccurred(row.symptoms.includes(SYMPTOMS.CLOSE_CONTACT))}</TableCell>
                <TableCell align="right">{symptomOccurred(row.symptoms.includes(SYMPTOMS.COMING_FROM_ABROAD))}</TableCell>
                <TableCell align="right">{row.probability.toFixed(2)}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Fab aria-label={'Dodaj nowy przypadek'} onClick={openModal}>
        <AddIcon/>
      </Fab>
      <NewCase open={values.newCaseModal} handleClose={closeModal}/>
      <div style={{ marginTop: 20 }}>
        <Button variant="contained" color="primary" onClick={calculateBuckets}>
          Calculate buckets
        </Button>
      </div>
    </div>
  )
}
