import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import useStyles from './styles';


// Components
import Questions from './components/Questions/Questions';


const App = () => {
  const classes = useStyles();

  return (
    <Container maxwidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Test Your Football Knowledge</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>

            <Grid item xs={12} sm={8}> <Questions /> </Grid>

          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
