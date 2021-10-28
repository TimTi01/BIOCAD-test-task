import './App.css';
import {makeStyles} from "@mui/styles";
import {Container, Grid} from "@mui/material";
import {Search} from "./Components/Search";
import {DeviceInfo} from "./Components/DeviceInfo";
import {Report} from "./Components/Report";

const useStyles = makeStyles({
  container: {
    '&&': {
      height: '1282px',
      width: '1000px',
    },
  },
})

function App() {
  const classes = useStyles()

  return (
      <Container className={classes.container}>
        <Grid container justifyContent='center'>
          <Grid container mt='30px' justifyContent='center' alignItems='flex-end'>
            <Grid item>
              <Search/>
            </Grid>

            <Grid item>
              <DeviceInfo/>
            </Grid>
          </Grid>

          <Grid  item pt='46px'>
            <Report/>
          </Grid>
        </Grid>
      </Container>
  );
}

export default App;
