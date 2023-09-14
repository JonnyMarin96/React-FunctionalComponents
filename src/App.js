import './App.css';
import { Container, Typography } from '@mui/material';
import FormSignup from './components/FormSignUp';

function App() {
  return (
    <>
      <Container component="section" maxWidth="sm">
        <Typography variant='h3' align='center'>Formulario Registro</Typography>
        <FormSignup/>
      </Container>
    </>
  );
}

export default App;
