import './App.css';
import { Container, Typography } from '@mui/material';
import FormSignup from './components/FormSignUp';

function App() {

  const handleSubmit = (valores) => {
    console.log("App JS: ", valores)
  }

  return (
    <>
      <Container component="section" maxWidth="sm">
        <Typography variant='h3' align='center'>Formulario Registro</Typography>
        <FormSignup handleSubmit={handleSubmit}/>
      </Container>
    </>
  );
}

export default App;
