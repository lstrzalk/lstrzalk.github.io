import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

export const Summary = ({ callback }) => (
  <React.Fragment>
    <Typography align="center" variant="h2" component="h2">
      <b>Good Job</b>
    </Typography>
    <Typography align="center" variant="h4" component="h4">
      All samples have been checked
    </Typography>
    <div style={{ display: 'flex', justifyContent: 'center', margin: '32px 0' }}>
      <Button size='large' variant='contained' onClick={callback} color="secondary">
        Crete new case
      </Button>
    </div>
  </React.Fragment>
)
