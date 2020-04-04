import React from 'react'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { SYMPTOMS } from '../data'
import { CheckCircleOutline, HighlightOff, Publish } from '@material-ui/icons'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import { NewCase } from './NewCase'
import Button from '@material-ui/core/Button'

const symptomOccurred = occurred => occurred ?
  <CheckCircleOutline style={{ color: green[500] }}/> : <HighlightOff style={{ color: red[500] }}/>

export const Cases = ({ cases, addCase, addDemoCases, removeCase }) => {
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
      <NewCase open={values.newCaseModal} handleClose={closeModal}/>
      {!!cases.length && <div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell> <b>id</b></TableCell>
                <TableCell align="right"><b>Fever</b></TableCell>
                <TableCell align="right"><b>Cough</b></TableCell>
                <TableCell align="right"><b>Difficulty with breathing</b></TableCell>
                <TableCell align="right"><b>Close contact with infected person</b></TableCell>
                <TableCell align="right"><b>Return from Abroad</b></TableCell>
                <TableCell align="right"><b>Probability</b></TableCell>
                <TableCell align="right"><b>Action</b></TableCell>
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
                  <TableCell align="right">{(row.probability * 100).toFixed(2)}%</TableCell>
                  <TableCell align="right"><DeleteIcon style={{ cursor: 'pointer' }} onClick={() => removeCase(row.id)}/></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end', margin: '16px 0' }}>
          <Fab onClick={openModal}>
            <AddIcon/>
          </Fab>
        </div>
      </div>
      }
      {!cases.length && <div style={{ display: 'flex', width: '100%', justifyContent: 'center' }}>
        <Button size="large" color="secondary" onClick={addDemoCases} style={{ margin: '16px' }} startIcon={<Publish/>}>
          Load example cases
        </Button>
        <Button size="large" color="primary" variant={'contained'} onClick={openModal} startIcon={<AddIcon/>} style={{ margin: '16px' }}>
          Add first case
        </Button>

      </div>}
    </div>
  )
}
