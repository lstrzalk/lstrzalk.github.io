import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import { CheckCircleOutline, HighlightOff } from '@material-ui/icons'
import green from '@material-ui/core/colors/green'
import red from '@material-ui/core/colors/red'

export const Buckets = ({ buckets }) => (
  <div>
    <Grid container spacing={2} style={{margin: 50}}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={2}>
          {buckets.map((bucket) => (
            <Grid key={bucket.id} item>
              <Paper style={{ height: 240, width: 100, marginBottom: 10 }}>
                <Grid container spacing={2} direction="column">
                  <Typography variant="h5" component="h2">
                    #{bucket.id}
                  </Typography>
                  <Typography style={{marginBottom:12}} color="textSecondary">
                    P: {bucket.p}
                  </Typography>
                  {bucket.samples.map((sample) => (
                    <Grid key={sample} item>
                      Sample #{sample}
                    </Grid>
                    ))}
                </Grid>
              </Paper>
              <CheckCircleOutline style={{ color: green[500], cursor: 'pointer' }} />
              <HighlightOff style={{ color: red[500], cursor: 'pointer' }} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  </div>
)
