import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { SYMPTOMS } from '../data'
import { CheckCircleOutline, HighlightOff } from '@material-ui/icons'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'
import Button from '@material-ui/core/Button'

const symptomOccured = occured => occured ?
  <CheckCircleOutline style={{ color: green[500] }} /> : <HighlightOff style={{ color: red[500] }} />


export const Cases = ({cases, calculateBuckets}) => (
  <div>
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="right">Gorączka</TableCell>
            <TableCell align="right">Kaszel</TableCell>
            <TableCell align="right">Duszności</TableCell>
            <TableCell align="right">Kontak z zakażonym</TableCell>
            <TableCell align="right">Powrót zza granicy</TableCell>
            <TableCell align="right">Prawdopodobieństwo</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cases.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell align="right">{symptomOccured(row.symptoms.includes(SYMPTOMS.FEVER)) }</TableCell>
              <TableCell align="right">{symptomOccured(row.symptoms.includes(SYMPTOMS.COUGH))}</TableCell>
              <TableCell align="right">{symptomOccured(row.symptoms.includes(SYMPTOMS.BREATHING_PROBLEM))}</TableCell>
              <TableCell align="right">{symptomOccured(row.symptoms.includes(SYMPTOMS.CLOSE_CONTACT))}</TableCell>
              <TableCell align="right">{symptomOccured(row.symptoms.includes(SYMPTOMS.COMING_FROM_ABROAD))}</TableCell>
              <TableCell align="right">{row.probability}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Button variant="contained" color="primary" onClick={calculateBuckets}>
      Calculate buckets
    </Button>
  </div>
)
